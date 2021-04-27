import React from "react";
import { HiOutlineBell } from "react-icons/hi";
import { NavContainer, Nav, NavItem } from "./NavbarElements";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <NavContainer>
      <Nav>
        <NavItem>
          <Link to="/">Amaranth10</Link>
        </NavItem>
        <NavItem>
          님 반갑습니다.
          <HiOutlineBell style={{ marginLeft: "15px", fontSize: "30px" }} />
        </NavItem>
      </Nav>
    </NavContainer>
  );
};

export default Navbar;
