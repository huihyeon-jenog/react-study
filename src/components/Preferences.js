import styled from "styled-components";

export const PreferenceContainer = styled.div`
  width: 80%;
  margin: 10px auto;
`;
export const PreferenceTop = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40px;
  position: relative;
  &:before {
    position: absolute;
    content: "";
    width: 100%;
    height: 2px;
    background: black;
    bottom: 0;
  }
`;
export const PreferenceTopTitel = styled.h2`
  line-height: 1px;
`;
export const PreferenceTopBreadCrumbs = styled.span`
  line-height: 50px;
`;
export const PreferenceBtn = styled.button`
  height: 30px;
  width: 90px;
  margin-top: 20px;
  position: absolute;
  right: 90px;
`;
export const PreferenceTable = styled.table`
  width: 100%;
  margin-top: 4em;
  border: none;
  border-collapse: collapse;
  text-align: center;
`;
export const PreferenceTablehead = styled.thead`
  color: #fff;
  background: black;
`;
export const PreferenceTablebody = styled.tbody``;
export const PreferenceTableTr = styled.tr`
  height: 30px;
`;
export const PreferenceTableTh = styled.th``;
export const PreferenceTableTd = styled.td`
  border-bottom: 1px solid black;
`;
