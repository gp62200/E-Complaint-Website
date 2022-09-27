import React from "react";

function se() {
  if (sessionStorage.getItem("user") !== null) {
    if (JSON.parse(sessionStorage.user).userRole === "admin") {
      window.location = "/admin/viewcomplaints";
    }
    if (JSON.parse(sessionStorage.user).userRole === "officer") {
      window.location = "/officer/viewacceptedcomplaints";
    }
    if (JSON.parse(sessionStorage.user).userRole === "normal") {
      window.location = "/user/homepage";
    }
  }
}
export default se;
