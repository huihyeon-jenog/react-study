import styled from "styled-components";

export const NavContainer = styled.div`
  width: 100%;
  height: 60px;
  position: relative;
`;
export const Nav = styled.ul`
  display: flex;
  justify-content: space-between;
  font-size: 24px;
  margin: 1em;
  position: relative;
  &:before {
    content: "";
    width: 100%;
    height: 2px;
    background: black;
    top: 60px;
    position: absolute;
  }
`;
export const NavItem = styled.li`
  color: gray;
`;
