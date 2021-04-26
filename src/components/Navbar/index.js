import React from "react";
import { HiOutlineBell } from "react-icons/hi";
import { NavContainer, Nav, NavItem } from "./NavbarElements";
const Navbar = () => {
  return (
    <NavContainer>
      <Nav>
        <NavItem>Amaranth10</NavItem>
        <NavItem>
          님 반갑습니다.
          <HiOutlineBell style={{ marginLeft: "15px", fontSize: "30px" }} />
        </NavItem>
      </Nav>
    </NavContainer>
  );
};

export default Navbar;
