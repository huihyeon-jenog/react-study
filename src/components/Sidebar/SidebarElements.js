import styled from "styled-components";
import { AiFillCaretRight } from "react-icons/ai";
export const SidebarContainer = styled.div`
  margin: 3em 0 0 1.2em;
  font-size: 18px;
  height: 100vh;
  width: 200px;
  position: relative;
  &:before {
    content: "";
    height: 100%;
    width: 2px;
    position: absolute;
    right: 0;
    top: -52px;
    background: black;
  }
`;
export const SidebarWrap = styled.ul``;
export const Right = styled(AiFillCaretRight)``;
export const SidebarTitle = styled.li``;
export const InnerSidebar = styled.ul`
  margin: 10px 0 10px 1.5em;
`;
export const SidebarA = styled.a``;
export const SidebarItem = styled.li`
  margin-top: 10px;
  position: relative;
  &:after {
    content: "";
    width: 5px;
    height: 5px;
    border-radius: 50%;
    top: 50%;
    transform: tanslateY(-50%);
    left: -10px;
    position: absolute;
    background: black;
  }
  &:hover {
    text-decoration: underline;
  }
`;
