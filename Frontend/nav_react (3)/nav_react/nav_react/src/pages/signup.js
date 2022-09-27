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
import img_50 from "./images/img_50.jpg";
import img23 from "./images/img23.jpg";
import img66 from "./images/img66.jpg";

function SignUp() {
  useEffect(() => {
    se();
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //console.log(errors);
  const onSubmit = (data) => {
    console.log(data);

    axios
      .post("http://localhost:8080/register", data)
      .then((response) => {
        swal({
          title: "Registration",
          text: "Successfully Registered..!!",
          timer: 4000})
        //swal("Successfully Registered..!!");
        //swal(response.data);
        window.location.href = "/signin";
      })
      .catch((error) => {
        swal("something went wrong");
      });
  };

  // const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  // const emailIsUnique = async (email) => {
  //   await wait(1000);
  //   return email !== "someone@somewhere.com";
  // };

  return (
   // <div className="App">
   <div
   className="container-fluid "
   style={{
     backgroundImage: `url(${img66})`,
     backgroundPosition: "center",
     backgroundSize: "cover",
     backgroundRepeat: "no-repeat",
     height: "1400px",
   }}
 >
   <div
     className="container py-5"
     style={{ width: "40vw", backgroundColor: "rgba(0,0,0,0.4)" }}
   >
     
      <div className="container py-5">
        <h1>Registration Form</h1>
       {/* <div className="card border-0 shadow w-75 p-5 mx-auto">*/}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group my-4 text-center mt-3 text-light">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                placeholder="Enter Your First Name"
                {...register("firstName", {
                  required: true,
                  pattern: /[A-Za-z]{3}/,
                  min: 4,
                  max: 10,
                })}
              />
              {errors.firstName && errors.firstName.type === "required" && (
                <span role="alert" class="imp">
                  *This field is required
                </span>
              )}
              {errors.firstName && errors.firstName.type === "pattern" && (
                <span role="alert" class="imp">
                  *Invalid First Name
                </span>
              )}
            </div>
            <div className="form-group my-4 text-center mt-3 text-light">
              <label htmlFor="middleName">middle Name</label>
              <input
                type="text"
                className="form-control"
                id="middleName"
                name="middleName"
                placeholder="Enter Your Middle Name"
                {...register("middleName", {
                  required: true,
                  pattern: /[A-Za-z]{3}/,
                  min: 4,
                  max: 10,
                })}
              />
              {errors.middleName && errors.middleName.type === "required" && (
                <span role="alert" class="imp">
                  *This field is required
                </span>
              )}
              {errors.middleName && errors.middleName.type === "pattern" && (
                <span role="alert" class="imp">
                  *Invalid Middle Name
                </span>
              )}
            </div>
            <div className="form-group my-4 text-center mt-3 text-light">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                placeholder="Enter Your Last Name"
                {...register("lastName", {
                  required: true,
                  pattern: /[A-Za-z]{3}/,
                  min: 4,
                  max: 10,
                })}
              />
              {errors.lastName && errors.lastName.type === "required" && (
                <span role="alert" class="imp">
                  *This field is required
                </span>
              )}
              {errors.lastName && errors.lastName.type === "pattern" && (
                <span role="alert" class="imp">
                  *Invalid Last Name
                </span>
              )}
            </div>

            {/*} <div className="form-group">
              <label htmlFor="gender" className="mr-4">
                Choose Your Gender
              </label>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  id="male"
                  value="male"
                  name="gender"
                />
                <label className="form-check-label" htmlFor="male">
                  male
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  id="female"
                  value="female"
                  name="gender"
                />
                <label className="form-check-label" htmlFor="female">
                  female
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  id="other"
                  value="other"
                  name="gender"
                />
                <label className="form-check-label" htmlFor="other">
                  other
                </label>
              </div>
              </div>*/}

            <div className="form-group my-4 text-center mt-3 text-light">
              <label htmlFor="state">Select Your Gender</label>
              <select
                className="form-control"
                id="gender"
                name="gender"
                {...register("gender", { required: true })}
              >
                {errors.state && errors.state.type === "required" && (
                  <span role="alert" class="imp">
                    *This field is required
                  </span>
                )}
                <option value="">--- Select Your Gender ---</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="form-group my-4 text-center mt-3 text-light">
              <label htmlFor="addharNo">Aadhaar No.</label>
              <input
                type="number"
                className="form-control"
                id="addharNo"
                name="addharNo"
                placeholder="Enter Your Adhar no."
                {...register("addharNo", {
                  required: true,
                  min: 12,
                })}
              />
              {errors.addharNo && errors.addharNo.type === "required" && (
                <span role="alert" class="imp">
                  *This field is required
                </span>
              )}
              {errors.addharNo && errors.addharNo.type === "min" && (
                <span role="alert" class="imp">
                  *Invalid Aadhaar no.
                </span>
              )}
            </div>

            <div className="form-group my-4 text-center mt-3 text-light">
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
              <label htmlFor="mobileNo">mobileNo Number</label>
              <input
                type="text"
                className="form-control"
                id="mobileNo"
                name="mobileNo"
                placeholder="Enter Your mobileNo Number"
                {...register("mobileNo", {
                  required: true,
                  minLength: 8,
                  maxLength: 12,
                })}
              />
              {errors.mobileNo && errors.mobileNo.type === "required" && (
                <span role="alert" class="imp">
                  *This field is required
                </span>
              )}
              {errors.mobileNo && errors.mobileNo.type === "minLength" && (
                <span role="alert" class="imp">
                  *Invalid mobileNo no minLength:10 maxLength: 12
                </span>
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
                  // validate: confirm,
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
                  *Must Contain 8 Characters, One Uppercase, One Lowercase, One
                  Number and one special case Character
                </span>
              )}
            </div>

            <div className="form-group my-4 text-center mt-3 text-light">
              <label htmlFor="confirmpassword">confirm password</label>
              <input
                type="text"
                className="form-control"
                id="confirmpassword"
                name="confirmpassword"
                placeholder="confirm your password"
                {...register("confirmpassword", {
                  required: true,
                  pattern: {
                    value:
                      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                  },
                })}
              />
              {errors.confirmpassword &&
                errors.confirmpassword.type === "required" && (
                  <span role="alert" class="imp">
                    *This field is required
                  </span>
                )}
              {errors.confirmpassword &&
                errors.confirmpassword.type === "pattern" && (
                  <span role="alert" class="imp">
                    *Must Contain 8 Characters, One Uppercase, One Lowercase,
                    One Number and one special case Character
                  </span>
                )}
            </div>

            <div className="form-group my-4 text-center mt-3 text-light">
              <label htmlFor="landmark">Landmark</label>
              <input
                type="text"
                className="form-control"
                id="landmark"
                name="landmark"
                placeholder="Enter Your LandMark"
                {...register("landmark", {
                  required: true,
                })}
              />
              {errors.landmark && errors.landmark.type === "required" && (
                <span role="alert" class="imp">
                  *This field is required
                </span>
              )}
            </div>
            <div className="form-group my-4 text-center mt-3 text-light">
              <label htmlFor="city">City</label>
              <select
              // <input
                type="text"
                className="form-control"
                id="city"
                name="city"
                placeholder="Enter Your City"
                {...register("city", {
                  required: true,
                })}
              >
              {errors.city && errors.city.type === "required" && (
                <span role="alert" class="imp">
                  *This field is required
                </span>
              )}
              <option value="">Select City</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Pune">Pune</option>
              <option value="Nagpur">Nagpur</option>
              <option value="Thane">Thane</option>
              <option value="PCMC, Pune">PCMC, Pune</option>
              <option value="Nashik">Nashik</option>
              <option value="Kalyan-Dombivli">Kalyan-Dombivli</option>
              <option value="Vasai-Virar City MC">Vasai-Virar City MC</option>
              <option value="Aurangabad">Aurangabad</option>
              <option value="Navi Mumbai">Navi Mumbai</option>
              <option value="Solapur">Solapur</option>
              <option value="Mira-Bhayandar">Mira-Bhayandar</option>
              <option value="Bhiwandi-Nizampur MC">Bhiwandi-Nizampur MC</option>
              <option value="Jalgaon">Jalgaon</option>
              <option value="Amravati">Amravati</option>
              <option value="Nanded">Nanded</option>
              <option value="Kolhapur">Kolhapur</option>
              <option value="Ulhasnagar">Ulhasnagar</option>
              <option value="Sangli-Miraj-Kupwad">Sangli-Miraj-Kupwad</option>
              <option value="Malegaon">Malegaon</option>
              <option value="Akola">Akola</option>
              <option value="Latur">Latur</option>
              <option value="Dhule">Dhule</option>
              <option value="Ahmednagar">Ahmednagar</option>
              <option value="Chandrapur">Chandrapur</option>
              <option value="Parbhani">Parbhani</option>
              <option value="Ichalkaranji">Ichalkaranji</option>
              <option value="Jalna">Jalna</option>
              <option value="Ambarnath">Ambarnath</option>
              <option value="Bhusawal">Bhusawal</option>
              <option value="Panvel">Panvel</option>
              <option value="Badlapur">Badlapur</option>
              <option value="Beed">Beed</option>
              <option value="Gondia">Gondia</option>
              <option value="Satara">Satara</option>
              <option value="Barshi">Barshi</option>
              <option value="Yavatmal">Yavatmal</option>
              <option value="Achalpur">Achalpur</option>
              <option value="Osmanabad">Osmanabad</option>
              <option value="Nandurbar">Nandurbar</option>
              <option value="Wardha">Wardha</option>
              <option value="Udgir">Udgir</option>
              <option value="Hinganghat">Hinganghat</option>
              </select>
            </div>
            <div className="form-group my-4 text-center mt-3 text-light">
              <label htmlFor="pincode">PinCode</label>
              <input
                type="number"
                className="form-control"
                id="pincode"
                name="pincode"
                placeholder="Enter pincode"
                {...register("pincode", {
                  required: true,
                  minLength: 6,
                  maxLength: 8,
                })}
              />
              {errors.pincode && errors.pincode.type === "required" && (
                <span role="alert" class="imp">
                  *This field is required
                </span>
              )}
              {errors.pincode && errors.pincode.type === "minLength" && (
                <span role="alert" class="imp">
                  *Invalid pincode minLength:6 maxLength:8
                </span>
              )}
            </div>

            <div className="form-group my-4 text-center mt-3 text-light">
              <label htmlFor="state">Choose Your state</label>
              <select
                className="form-control"
                id="state"
                name="state"
                {...register("state", { required: true })}
              >
                {errors.state && errors.state.type === "required" && (
                  <span role="alert" class="imp">
                    *This field is required
                  </span>
                )}
                <option value="">--- Select Your state ---</option>
                <option value="Maharashtra">Maharashtra</option>
                {/* <option value="Assam">Assam</option>
                <option value="Maharashtra">Meghalaya</option>
                <option value="Punjab">Punjab</option> */}
              </select>
            </div>

            {/* <-- <div className="form-group">
              <div className="form-check form-check-inline">
                <input
                  className="form-control"
                  className="form-check-input"
                  type="checkbox"
                  id="tnc"
                  name="tnc"
                  {...register("tnc", { required: true })}
                />
                {errors.tnc && errors.tnc.type === "required" && (
                  <span role="alert" class="imp">
                    *This field is required
                  </span>
                )} 
                <label className="form-check-label" htmlFor="tnc">
                  I agree all terms & conditions
                </label>
              </div>
            </div> --> */}

            <button className="btn btn-primary" type="submit">
              Create New Account
            </button>
            <br />
            <br></br>

            <a href="signin">Existing User? Login</a>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
