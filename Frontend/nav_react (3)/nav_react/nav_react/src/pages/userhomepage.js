import { useEffect, useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import use from "./use.js";
import logout from "./logout.js";
import img_50 from "./images/img_50.jpg";

export default function UserHomePage() {
  let [userList, setUserList] = useState([]);

  useEffect(() => {
    use();
  });

  return (
    <div
        className="container-fluid "
        style={{
          backgroundImage: `url(${img_50})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "400px",
        }}
      
      >
    <div className="text-center m-5 p-5">
      {/* <h1 className="bg-dark text-light p-3 ">Complaint List </h1> */}
      <a href="/user/lodgecomplaint">
        <button className="btn btn-info p-2 m-5 ">lodge complaint</button>
      </a>
      <br></br>
      <a href="/user/viewcomplaints">
        <button className="btn btn-info p-2 m-2">view complaint</button>
      </a>
      <br></br>
    </div>
    </div>
  );
}

