import React from "react";
import axios from "axios";
//import sweetalert from "sweetalert";
import swal from "sweetalert";
import { useForm } from "react-hook-form";
//import { useEffect, usestate } from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import se from "./se.js";
import { useEffect } from "react";

function ResetPassword() {
  useEffect(() => {
    se();
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //console.log(errors);
  const onSubmit = async (e) => {
    let email = sessionStorage.getItem("email");
    console.log(email);

    //console.log(document.getElementById("password").value);
    let newpassword = document.getElementById("password").value;
    console.log(newpassword);
    //console.log(data);

    // await axios.post("http://localhost:8080/resetpassword", null, {
    //   params: { newpassword, user },
    // });

    let response = axios
      .post("http://localhost:8080/resetpassword", null, {
        params: { newpassword, email },
      })
      .then((response) => {
        //swal(response.data);
        if (response.data) {
          console.log(response.data);
          alert("Password Successfully changed..!!")
          window.location.href = "/signin";
        } else {
          alert("Please enter correct email");
        }
      })
      .catch((error) => {
        swal("something went wrong");
      });
    return response.data;
  };

  // const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  // const emailIsUnique = async (email) => {
  //   await wait(1000);
  //   return email !== "someone@somewhere.com";
  // };

  return (
    <div className="App">
      <div className="container py-5">
        <h1>Reset Password</h1>
        <div className="card border-0 shadow w-75 p-5 mx-auto">
          <form>
            <div className="form-group">
              <label htmlFor="password">password</label>
              <input
                type="text"
                className="form-control"
                id="password"
                name="password"
                placeholder="Enter Your password"
                {...register("password", {
                  required: true,
                  pattern: {
                    value:
                      /^(?=.[A-Za-z])(?=.\d)(?=.[@$!%#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                  },
                })}
              />
              {errors.password && errors.password.type === "required" && (
                <span role="alert" class="imp">
                  *This field is required
                </span>
              )}
              {errors.password && errors.password.type === "pattern" && (
                <span role="alert" class="imp">
                  *Must Contain 8 Characters, One Uppercase, One Lowercase, One
                  Number and one special case Character
                </span>
              )}
            </div>
            <button
              type="button"
              onClick={onSubmit}
              className="btn btn-primary"
            >
              Reset Password
            </button>
            <br />
            <br></br>
          </form>
          
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;