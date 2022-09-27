import React from "react";
import axios from "axios";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import se from "./se.js";
import { useEffect } from "react";

function Forgot() {
  useEffect(() => {
    se();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(errors);
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("http://localhost:8080/sendotp", data)
      .then((response) => {
        swal(response.data);
        window.location.href = "/enterotp";
      })
      .catch((error) => {
        swal("Please enter correct email");
        console.log(error.response);
      });
    sessionStorage.setItem("email", document.getElementById("email").value); //setItem
  };

  return (
    <div className="App">
      <div className="container py-3">
        <h1>Reset Password</h1>
        <div className="card border-0 shadow w-50 p-5 mx-auto">
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label htmlFor="email">E-mail Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Enter Your E-mail Address"
                  {...register("email", {
                    required: true,
                    //validate: emailIsUnique,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
                />
                {errors.email && errors.email.type === "required" && (
                  <span role="alert" class="imp">
                    *This field is required
                  </span>
                )}
                {errors.email && errors.email.type === "validate" && (
                  <div className="error" class="imp">
                    This email address already exists
                  </div>
                )}
                {errors.email && errors.email.type === "pattern" && (
                  <div className="error" class="imp">
                    *Invalid email address
                  </div>
                )}
              </div>
              <button className="btn btn-primary">Send OTP</button>
              <br />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forgot;