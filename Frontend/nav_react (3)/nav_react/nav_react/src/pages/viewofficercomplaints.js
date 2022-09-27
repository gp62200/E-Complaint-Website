import { useEffect, useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import ase from "./ase.js";
import logout from "./logout.js";
import { useForm } from "react-hook-form";




export default function ViewOfficerComplaintList() {
  let [userList, setUserList] = useState([]);
  let [id, setId] = useState([]);
  let [acceptId, setAcceptId] = useState([]);

  useEffect(() => {
    ase();
    // readAllUser();
  }, []);
  let [cid, setCid] = useState();
  let [acid, setAcid] = useState();
  

  const readacceptedcomplaints = async () => {
    console.log(JSON.parse(sessionStorage.user).userId);
    // GET API
    axios
      .post(
        //"http://localhost:8080/viewadmincomplaints/accepted",
         "http://localhost:8080/viewofficercomplaints/accepted",
        JSON.parse(sessionStorage.user).userId
      )
      .then((response) => {
        setUserList(response.data.reverse());
        console.log(response.data.reverse());
      })
      .catch((error) => {
        swal("something went wrong");
      });
  };

  
  const readcompletedcomplaints = async () => {
    console.log(JSON.parse(sessionStorage.user).userId);
    // GET API
    axios
      .post(
        "http://localhost:8080/viewofficercomplaints/completed",
        JSON.parse(sessionStorage.user).userId 
      )
      .then((response) => {
        setUserList(response.data.reverse());
        console.log(response.data.reverse());
        swal("These are completed complaints");
      })
      .catch((error) => {
        swal("something went wrong");
      });
  };



  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  //console.log(errors);
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("http://localhost:8080/complete", data)
      .then((response) => {
        window.location = "/officer/viewacceptedcomplaints";
      })
      .catch((error) => {
        console.log(error.response.data.result);
        swal(error.response.data.result);
        //swal("invalid credentials");
      });
  };

  function complete(complaintId) {
    console.log(complaintId);
    axios
      .post("http://localhost:8080/complete", complaintId)
      .then((response) => {})
      .catch((error) => {
        swal("something went wrong");
      });
  }
  // function reject(complaintId) {
  //   console.log(complaintId);
  //   axios
  //     .post("http://localhost:8080/reject", complaintId)
  //     .then((response) => {})
  //     .catch((error) => {
  //       swal("something went wrong");
  //     });
  // }

  
 


  return (
    <div className="mx-2">
      <h1 className="bg-dark text-light p-3 ">Complaint List </h1>

      {/* ********************************************************************* */}
      <div>
        
        <button
          className="btn btn-success my-3 mx-2"
          onClick={() => {
            readacceptedcomplaints();
          }}
        >
          accepted
        </button>
        <button
          className="btn btn-success my-3 mx-2"
          onClick={() => {
            readcompletedcomplaints();
          }}
        >
          completed
        </button>
        
       
      </div>

      {/* ********************************************************************************* */}
      
      {acceptId.map((item) => {
        return (
          <form onSubmit={handleSubmit(onSubmit)} className="mx-4">
            <div className="form-group">
              <label htmlFor="complaintId">Complaint Id</label>
              <input
                type="text"
                className="form-control"
                id="complaintId"
                name="complaintId"
                value={acid}
                placeholder="complaintId"
                {...register("complaintId", {
                  required: true,
                })}
              />
            </div>
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

            <button className="btn btn-primary" type="submit">
              submit
            </button>
          </form>
        );
      })}



      
      {userList.map((item) => {
        return (
          <div
            className=" border border-dark m-3 "
            style={{ backgroundColor: "#f1f1f1" }}
          >
            <span className="m-1 p-2">
              <b>ComplaintId:</b> {item.complaintId}
            </span>
            <span className="m-1 p-2">
              <b>ComplaintDate: </b>
              {item.complaintDate}
            </span>
            <span className="m-1 p-2">
              <b>Dept: </b>
              {item.dept}
            </span>
            <br />
            <hr />
            <div className="m-1 p-2">
              <h6>
                <b>Description :</b>
              </h6>
              {item.description}
              <br />
              <br />

              <h6>
                <b>Extra Comment:</b>
              </h6>
              {item.extraComment}
            </div>
            <hr />
            {/* <br /> */}
            <span
              className="m-1 p-2 border font-weight-bold
                                                               rounded bg-white"
            >
              {item.acknowledgement}
            </span>{" "}
            <span className="m-1 p-2">
              <b>Reject Reason:</b> {item.rejectReason}
            </span>
            <br />
            {/* <td>{item.}</td>
                <td>{item.}</td> */}
            <div>
            <span
              className="m-1 p-2 border font-weight-bold
                                                               rounded bg-white"
            >
              {item.complaintStatus}
            </span>{" "}
               <button
                className="btn btn-success my-3 mx-2"
                onClick={() => {
                  setAcceptId([1]);
                  setId([1]);
                  setAcid(item.complaintId);
                  console.log(cid);
                }}
              >
                complete
               </button>
              {/*<button
                className="btn btn-danger my-3 mx-2"
                onClick={
                  () => {
                    setId([1]);
                    setAcceptId([]);
                    setCid(item.complaintId);
                    console.log(cid);
                  }

                  //   (deletecomp = () => {
                  //     deletecomplaint(item.complaintId);
                  //   })
                }
              >
                reject 
              </button> */}
            </div>
          </div>
        );  
      })}
    </div>
  );
}

// *****************************************************************
