import React from "react";
import logout from "../../pages/logout";
import {
  Nav,
  NavLogo,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
  if (sessionStorage.getItem("user") == null) {
    return (
      <>
        <Nav>
          <NavLogo to="/">e-Complaint Forum</NavLogo>
          <Bars />

          <NavMenu>
            <NavLink to="/" activeStyle>
              Home
            </NavLink>
            <NavLink to="/about" activeStyle>
              About
            </NavLink>
            <NavLink to="/contact" activeStyle>
              Contact
            </NavLink>
            <NavLink to="/signin" activeStyle>
              Sign In
            </NavLink>
            <NavBtn>
              <NavBtnLink to="/signup">Sign Up</NavBtnLink>
            </NavBtn>
          </NavMenu>
        </Nav>
      </>
    );
  } else {
    return (
      <>
        <Nav>
          <NavLogo to="/">e-Complaint Forum</NavLogo>
          <Bars />

          <NavMenu>
            <NavLink to="/" activeStyle>
              Home
            </NavLink>
            <NavLink to="/about" activeStyle>
              About
            </NavLink>
            <NavLink to="/contact" activeStyle>
              Contact
            </NavLink>
            <NavBtn>
              <NavBtnLink to="/signup" onClick={logout}>
                Sign Out
              </NavBtnLink>
            </NavBtn>
          </NavMenu>
        </Nav>
      </>
    );
  }
};
export default Navbar;
