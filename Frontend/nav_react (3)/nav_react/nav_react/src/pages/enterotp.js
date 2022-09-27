import React from "react";
import axios from "axios";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import se from "./se.js";

function EnterOtp() {
  useEffect(() => {
    se();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //console.log(errors);
  const onSubmit = (e) => {
    let user = sessionStorage.getItem("email");
    // console.log(user);
    console.log(document.getElementById("otp").value);
    let obj = document.getElementById("otp").value;

    console.log(user);
    let response = axios
      .post("http://localhost:8080/verifyotp", null, { params: { obj, user } })
      .then((response) => {
        //swal(response.data);
        if (response.data) {
          console.log(response.data);
          window.location.href = "/resetpassword";
        } else {
          alert("Wrong otp");
        }
      })
      .catch((error) => {
        swal("something went wrong");
      });
    return response.data;
  };

  return (
    <div className="App">
      <div className="container py-3">
        <h1>Enter Otp</h1>
        <div className="card border-0 shadow w-50 p-5 mx-auto">
          <div>
            <form>
              <div className="form-group">
                <label htmlFor="otp">EnterOtp</label>
                <input
                  type="text"
                  className="form-control"
                  id="otp"
                  name="otp"
                  placeholder="Enter Otp"
                  {...register("otp", {
                    required: true,
                  })}
                />
              </div>
              <button
                type="button"
                onClick={onSubmit}
                className="btn btn-primary"
              >
                Send OTP
              </button>
              <br />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EnterOtp;