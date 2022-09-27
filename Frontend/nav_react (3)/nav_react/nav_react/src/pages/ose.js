function ose() {
    if (sessionStorage.getItem("user") === null) {
      window.location = "/";
    } else {
      if (JSON.parse(sessionStorage.user).userRole === "officer") {
        window.location = "/officer/viewacceptedcomplaints";
      }
    }
  }
  
  export default ose;