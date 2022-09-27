import { useEffect, useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import use from "./use.js";

export default function ViewComplaintList() {
  let [userList, setUserList] = useState([]);

  useEffect(() => {
    use();
    readAllUser();
  }, []);

  function deletecomp(id) {
    deletecomplaint(id);
  }

  const readAllUser = async () => {
    //sessionStorage.clear();
    console.log(sessionStorage.getItem("user"));
    // GET API
    axios
      .post(
        "http://localhost:8080/viewusercomplaints",
        JSON.parse(sessionStorage.user).userId
        //userId: sessionStorage.getItem(userId),
      )
      .then((response) => {
        setUserList(response.data.reverse());
      })
      .catch((error) => {
        swal("something went wrong");
      });
  };

  function deletecomplaint(complaintId) {
    console.log(complaintId);
    axios
      .post("http://localhost:8080/cancelcomplaint", complaintId)
      .then((response) => {
        window.location = "/user/viewcomplaints";
      })
      .catch((error) => {
        swal("something went wrong");
      });
  }

  const logout = () => {
    sessionStorage.clear();
    window.location = "/";
  };

  return (
    <div style={{ height: "max-content" }}>
      <h1 className="bg-dark text-light p-3" style={{ height: "auto" }}>
        Complaint List{" "}
      </h1>
      <div className="container">
        {/** List BOX HERE */}
        {/* <table className="table table-dark table-striped m-2">
        <thead>
          <tr>
            <th scope="col">#ID</th>
            <th scope="col">complaint Date</th>
            <th scope="col">Dept</th>
            <th scope="col">Discription</th>
            <th scope="col">acknowlegdement</th>
            {/* <th scope="col">EMAIL</th>
            <th scope="col">MOBILE</th>
            <th scope="col">PASSWORD</th> */}
        {/* </tr> */}
        {/* // </thead> */}
        {/* // <tbody> */}
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
              </div>
              <hr />
              {/* <br /> */}
              <span
                className="m-1 p-2 border font-weight-bold
                                                               rounded bg-white"
              >
                {/* <span className="m-1 p-2 bg-info text-white"> */}
                {item.acknowledgement}
              </span>{" "}
              <span className="m-1 p-2 ">
                <b>Reject Reason:</b>
                {item.rejectReason}
              </span>
              <br />
              <br />
              <span
              className="m-1 p-2 border font-weight-bold
                                                               rounded bg-white"
            >
              {item.complaintStatus}
              </span>{" "}
              {/* <td>{item.}</td>
                <td>{item.}</td> */}
              <div className="my-4 mx-2 ">
                <button
                  className="btn btn-danger"
                  onClick={
                    () => deletecomp(item.complaintId)

                    //   (deletecomp = () => {
                    //     deletecomplaint(item.complaintId);
                    //   })
                  }
                >
                  delete
                </button>
              </div>
            </div>
          );
        })}
        {/* </tbody> */}
        {/* </table> */}
        {/* <button onClick={logout}>logout</button> */}
      </div>
      {/* <br></br>
      <br></br> */}
    </div>
  );
}
