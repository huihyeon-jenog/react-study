import React from "react";
import {
  PreferenceContainer,
  PreferenceTop,
  PreferenceTopTitel,
  PreferenceTopBreadCrumbs,
  PreferenceBtn,
  PreferenceTable,
  PreferenceTableTr,
  PreferenceTableTh,
  PreferenceTableTd,
  PreferenceTablehead,
  PreferenceTablebody,
} from "../Preferences";
import { BsPencilSquare, BsTrash } from "react-icons/bs";
const Executives = () => {
  return (
    <>
      <PreferenceContainer>
        <PreferenceTop>
          <PreferenceTopTitel>임원 환경설정</PreferenceTopTitel>
          <PreferenceTopBreadCrumbs>
            &gt;&gt;환경설정 &gt;임원
          </PreferenceTopBreadCrumbs>
        </PreferenceTop>
        <PreferenceBtn>새로등록</PreferenceBtn>
        <PreferenceTable>
          <PreferenceTablehead>
            <PreferenceTableTr>
              <PreferenceTableTh>타입명</PreferenceTableTh>
              <PreferenceTableTh>근로형태</PreferenceTableTh>
              <PreferenceTableTh>관리</PreferenceTableTh>
            </PreferenceTableTr>
          </PreferenceTablehead>
          <PreferenceTablebody>
            <PreferenceTableTr>
              <PreferenceTableTd>기본</PreferenceTableTd>
              <PreferenceTableTd>일반근로</PreferenceTableTd>
              <PreferenceTableTd>
                <BsPencilSquare />
                <BsTrash />
              </PreferenceTableTd>
            </PreferenceTableTr>
          </PreferenceTablebody>
        </PreferenceTable>
      </PreferenceContainer>
    </>
  );
};

export default Executives;
