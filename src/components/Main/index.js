import React from "react";
import {
  MainContainer,
  MainItemWrap,
  MainItemTitle,
  MainItemHit,
  MainBtnWrap,
  WriteBtn,
  ListBtn,
} from "./MainElements";
const Main = () => {
  return (
    <MainContainer>
      <MainItemWrap>
        <MainItemTitle>작성중</MainItemTitle>
        <MainItemHit>건</MainItemHit>
      </MainItemWrap>
      <MainItemWrap>
        <MainItemTitle>작성중</MainItemTitle>
        <MainItemHit>건</MainItemHit>
      </MainItemWrap>
      <MainBtnWrap>
        <WriteBtn>근로계약서 작성</WriteBtn>
        <ListBtn>작성중 목록</ListBtn>
      </MainBtnWrap>
    </MainContainer>
  );
};

export default Main;
