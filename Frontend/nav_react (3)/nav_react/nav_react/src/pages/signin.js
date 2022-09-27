import React, { useEffect, useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import se from "./se.js";
import img_50 from "./images/img_50.jpg";
import ReCAPTCHA from "react-google-recaptcha";
import img23 from "./images/img23.jpg";
import img66 from "./images/img66.jpg";
import Captcha from "./Captcha";


//import img from "D:/spring_workplace/MainProject3/src/main/resources/static/images/forgotpassword.png";

function SignIn() {
  const [verified,setVerified] = useState(false)
  
  useEffect(() => {
    se();
   
  }, []);

  

  const {
    register,
    handleSubmit,
    formState: { errors },
    
  } = useForm();
  
  function onChange(value) {
    // console.log(value);
    console.log("Captcha value:", value);
    setVerified(true);
  }
  //console.log(errors);
  const onSubmit = (data) => {
    //const [verified,setVerified] = useState(false)
    console.log(data);
    
    axios
      .post("http://localhost:8080/login", data)
      .then((response) => {
        //swal(response.data);
        sessionStorage.setItem("user", JSON.stringify(response.data.user));
        if (response.data.user.userRole === "normal") {
          //console.log(JSON.parse(sessionStorage.user).userId);
          alert("Successfully Logged in as consumer....")
          window.location.href = "/user/homepage";
        }
        if (response.data.user.userRole === "admin"){
          alert("Successfully Logged in as admin....")
          window.location.href = "/admin/viewcomplaints";
        }
        if (response.data.user.userRole === "officer"){
          alert("Successfully Logged in as officer....")
          window.location.href = "/officer/viewacceptedcomplaints";
        }
      })
      .catch((error) => {
        console.log(error.response.data.result);
        Swal.fire(error.response.data.result);
        //swal("invalid credentials");
      });
  };


  return (
   // <div className="App">
      <div
      className="container-fluid "
      style={{
        backgroundImage: `url(${img66})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "1000px",
      }}
    >
      <div
        className="container py-5"
        style={{ width: "40vw", backgroundColor: "rgba(0,0,0,0.4)" }}
      >
        <div className="alert  alert-light  bg-dark  text-center mt-5 h2 text-light">
          <b> Login Here</b>
        </div>
      {/* <img src={img} alt="img1" /> */}
      {/*<div className="card border-0 shadow w-50 p-5 mx-auto">*/}
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group my-4 text-center mt-3 text-light" >
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

              <div className="form-group my-4 text-center mt-3 text-light">
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
                        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
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
                    *Must Contain 8 Characters, One Uppercase, One Lowercase,
                    One Number and one special case Character
                  </span>
                )}
              </div>
              {/* <CaptchaTest 
              onChange={onChange}
              /> */}
              {/* <Captcha
              onChange={onChange}
              /> */}
              <ReCAPTCHA
                  sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                  onChange={onChange}
              />
              
              <button type="submit" className="btn btn-primary" disabled={!verified}>Login</button>
              <br />
              <p className="forgot-password " color="red">
                <Link to={"/forgot"}>Forgot Password?</Link>
              </p>

              <p className=" Register " color="red">
                <Link to={"/signup"}>New User?</Link>
              </p>
            </form>
            
          </div>
        </div>
      </div>
    
  );
}

export default SignIn;
