import React from "react";
import {
  SidebarContainer,
  SidebarWrap,
  Right,
  SidebarTitle,
  InnerSidebar,
  SidebarItem,
  SidebarA,
} from "./SidebarElements";
const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarWrap>
        <SidebarTitle>
          <Right />
          환경설정
          <InnerSidebar>
            <SidebarItem>
              <SidebarA to="/fulltimepreference">정규직</SidebarA>
            </SidebarItem>
            <SidebarItem>
              <SidebarA to="/dailyjobpreference">일용직</SidebarA>
            </SidebarItem>
            <SidebarItem>
              <SidebarA to="/executivespreference">임원</SidebarA>
            </SidebarItem>
            <SidebarItem>
              <SidebarA to="/freelancerpreference">프리랜서</SidebarA>
            </SidebarItem>
          </InnerSidebar>
        </SidebarTitle>
        <SidebarTitle>
          <Right />
          근로계약서 작성
          <InnerSidebar>
            <SidebarItem>
              <SidebarA to="/">정규직</SidebarA>
            </SidebarItem>
            <SidebarItem>
              <SidebarA to="/">일용직</SidebarA>
            </SidebarItem>
            <SidebarItem>
              <SidebarA to="/">임원</SidebarA>
            </SidebarItem>
            <SidebarItem>
              <SidebarA to="/">프리랜서</SidebarA>
            </SidebarItem>
          </InnerSidebar>
        </SidebarTitle>
        <SidebarTitle>
          <Right />
          근로계약서 목록
          <InnerSidebar>
            <SidebarItem>
              <SidebarA to="/">작성중 목록</SidebarA>
            </SidebarItem>
            <SidebarItem>
              <SidebarA to="/">서명대기 목록</SidebarA>
            </SidebarItem>
            <SidebarItem>
              <SidebarA to="/">서명완료 목록</SidebarA>
            </SidebarItem>
          </InnerSidebar>
        </SidebarTitle>
      </SidebarWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
