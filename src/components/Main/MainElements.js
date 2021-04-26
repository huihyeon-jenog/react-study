import styled from "styled-components";

export const MainContainer = styled.div`
  position: relative;
  width: 700px;
  height: 600px;
  margin: 3em auto 0;
  font-size: 22px;
`;
export const MainItemWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: center;
  height: 60px;
  line-height: 60px;
  border-top: 1.5px solid black;
  border-bottom: 1.5px solid black;
  position: relative;
  &:nth-child(2) {
    margin-top: 30px;
  }
`;
export const MainItemTitle = styled.span`
  background: gray;
`;
export const MainItemHit = styled.div`
  vertical-align: middle;
`;
export const MainBtnWrap = styled.div`
  display: flex;
  margin-top: 30px;

  justify-content: space-between;
  height: 60px;
`;
export const WriteBtn = styled.button`
  width: 45%;
  font-size: 22px;
`;
export const ListBtn = styled.button`
  width: 45%;
  font-size: 22px;
`;
