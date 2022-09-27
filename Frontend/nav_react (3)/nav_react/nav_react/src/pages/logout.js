const logout = () => {
  sessionStorage.clear();
  window.location = "/";
};

export default logout;
