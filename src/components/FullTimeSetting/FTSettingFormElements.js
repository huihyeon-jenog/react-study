import styled from "styled-components";

export const PreferenceForm = styled.form``;
export const TypeWrap = styled.div`
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  height: auto;
  line-height: 40px;
  position: relative;
`;
export const TypeTitle = styled.h3`
  margin: 30px 0 10px 0;
`;
export const TypeP = styled.p`
  display: inline-block;
  margin: 0;
  width: 15%;
  background: black;
  color: #fff;
  text-align: center;
  height: 30px;
  line-height: 30px;
`;
export const TypeName = styled.input`
  margin-left: 8px;
  height: 30px;
  width: 30%;
  line-height: 30px;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;
export const TypeSelect = styled.select`
  margin-left: 8px;
  height: 30px;
  width: 15%;
  line-height: 30px;
  box-sizing: border-box;
  position: relative;
  top: -2px;
`;
export const TypeRadio = styled.input`
  margin-left: 20px;
`;
