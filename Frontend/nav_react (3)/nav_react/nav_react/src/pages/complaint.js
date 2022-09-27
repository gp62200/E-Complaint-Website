import React from "react";
import { useForm } from "react-hook-form";
//import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import use from "./use.js";
import { useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";
import img_50 from "./images/img_50.jpg";


function Complaint() {
  useEffect(() => {
    use();
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(errors);
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("http://localhost:8080/registercomplaint", data)
      .then((response) => {
        alert("Complaint registered successfully...!!")
        window.location = "/user/viewcomplaints";
      })
      .catch((error) => {
        //console.log(error.response.data.result);
        //swal(error.response.data.result);
        swal("invalid credentials");
      });
  };

  return (
    <div
        className="container-fluid "
        style={{
          backgroundImage: `url(${img_50})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "600px",
        }}
      
      >
    <div className="complaint">
      <div className="container py-5">
        <h1 align="center">Complaint Details</h1>
        <div className="card border-0 shadow w-75 p-5 mx-auto">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="dept">Department</label>
              <select
                className="form-control"
                id="dept"
                name="dept"
                {...register("dept", { required: true })}
              >
                {errors.dept && errors.dept.type === "required" && (
                  <span role="alert" class="imp">
                    *This field is required
                  </span>
                )}
                <option value="">Select Department</option>
                <option value="Road construction Department">
                  Road construction Department
                </option>
                <option value="Water Supply Department">
                  Water Supply Department
                </option>
                <option value="Drainage Department">Drainage Department</option>
                <option value="Health Department">Health Department</option>
                <option value="Waste management Department">
                  Waste management Department
                </option>
                <option value="Education department">
                  Education department
                </option>
                <option value="Environment Department">
                  Environment Department
                </option>
              </select>
            </div>

            {/* <div className="form-group">
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
              </div>*/}
            <div className="form-group">
              {/* <label htmlFor="userId">user id</label> */}
              <input
                type="hidden"
                className="form-control"
                id="userId"
                name="userId"
                value={JSON.parse(sessionStorage.user).userId}
                placeholder="Enter your complaint details here"
                {...register("userId", {
                  required: true,
                })}
              />

              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  name="description"
                  placeholder="Enter your complaint details here"
                  {...register("description", {
                    required: true,
                    pattern: /[A-Za-z0-9]{3}/,
                    min: 20,
                    max: 500,
                  })}
                />
                {errors.description && errors.description.type === "required" && (
                  <span role="alert" class="imp">
                    *This field is required
                  </span>
                )}
                {errors.description && errors.description.type === "pattern" && (
                  <span role="alert" class="imp">
                    *Must not use symbols
                  </span>
                )}

                {errors.description && errors.description.type === "min" && (
                  <span role="alert" class="imp">
                    *Please Fill the description
                  </span>
                )}
              </div>
            </div>

            {/* <div className="form-group">
              <label htmlFor="dates"> Date of Complaint: </label>
              <input type="date" id="dates" name="dates"></input>
            </div> */}

            <div className="form-group">
              <label htmlFor="extraComment">
                Additional Information(optional)
              </label>
              <input
                type="text"
                className="form-control"
                id="extraComment"
                name="extraComment"
                placeholder="Additional Information"
                {...register("extraComment")}
              />
            </div>

            <div className="form-group">
              <div className="form-check form-check-inline">
                <input
                  className="confirm"
                  type="checkbox"
                  id="confirm"
                  name="confirm"
                  {...register("confirm", { required: true })}
                />
                {errors.confirm && errors.confirm.type === "required" && (
                  <span role="alert" class="imp"></span>
                )}
                <label className="confirm" htmlFor="confirm">
                  Confirm the Complaint
                </label>
              </div>
            </div>

            <button className="btn btn-primary" type="submit">
              File Complaint
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Complaint;
