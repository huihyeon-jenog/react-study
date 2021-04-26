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
              <SidebarA href="/">정규직</SidebarA>
            </SidebarItem>
            <SidebarItem>
              <SidebarA href="/">일용직</SidebarA>
            </SidebarItem>
            <SidebarItem>
              <SidebarA href="/">임원</SidebarA>
            </SidebarItem>
            <SidebarItem>
              <SidebarA href="/">프리랜서</SidebarA>
            </SidebarItem>
          </InnerSidebar>
        </SidebarTitle>
        <SidebarTitle>
          <Right />
          근로계약서 작성
          <InnerSidebar>
            <SidebarItem>
              <SidebarA href="/">정규직</SidebarA>
            </SidebarItem>
            <SidebarItem>
              <SidebarA href="/">일용직</SidebarA>
            </SidebarItem>
            <SidebarItem>
              <SidebarA href="/">임원</SidebarA>
            </SidebarItem>
            <SidebarItem>
              <SidebarA href="/">프리랜서</SidebarA>
            </SidebarItem>
          </InnerSidebar>
        </SidebarTitle>
        <SidebarTitle>
          <Right />
          근로계약서 목록
          <InnerSidebar>
            <SidebarItem>
              <SidebarA href="/">작성중 목록</SidebarA>
            </SidebarItem>
            <SidebarItem>
              <SidebarA href="/">서명대기 목록</SidebarA>
            </SidebarItem>
            <SidebarItem>
              <SidebarA href="/">서명완료 목록</SidebarA>
            </SidebarItem>
          </InnerSidebar>
        </SidebarTitle>
      </SidebarWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
