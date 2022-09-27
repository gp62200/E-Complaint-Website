function use() {
  if (sessionStorage.getItem("user") === null) {
    window.location = "/";
  } else {
    if (JSON.parse(sessionStorage.user).userRole === "admin") {
      window.location = "/admin/viewcomplaints";
      
    }
  }
}


export default use;
