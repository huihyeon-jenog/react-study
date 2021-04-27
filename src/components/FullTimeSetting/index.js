import React from "react";
import {
  PreferenceContainer,
  PreferenceTop,
  PreferenceTopTitel,
  PreferenceTopBreadCrumbs,
  PreferenceBtn,
} from "../Preferences";
import {
  PreferenceForm,
  TypeWrap,
  TypeP,
  TypeTitle,
  TypeName,
  TypeSelect,
  TypeRadio,
} from "./FTSettingFormElements";

const FullTimeSetting = ({ toggle }) => {
  return (
    <>
      <PreferenceContainer>
        <PreferenceTop>
          <PreferenceTopTitel>정규직 환경설정</PreferenceTopTitel>
          <PreferenceTopBreadCrumbs>
            &gt;&gt;환경설정 &gt;정규직 &gt;새로작성
          </PreferenceTopBreadCrumbs>
        </PreferenceTop>
        <PreferenceForm>
          <TypeTitle>타입명</TypeTitle>
          <TypeWrap>
            <TypeP>타입명</TypeP>
            <TypeName />
          </TypeWrap>
          <TypeTitle>근무조건</TypeTitle>
          <TypeWrap>
            <TypeP>근무장소</TypeP>
            <TypeName />
          </TypeWrap>
          <TypeWrap>
            <TypeP>근로형태</TypeP>
            <TypeSelect>
              <option value="일반근로">일반근로</option>
              <option value="일반근로2">일반근로2</option>
            </TypeSelect>
          </TypeWrap>
          <TypeWrap>
            <TypeP>수습기간</TypeP>
            <TypeSelect>
              <option value="3">3개월</option>
              <option value="6">6개월</option>
              <option value="12">12개월</option>
            </TypeSelect>
          </TypeWrap>
          <TypeWrap>
            <TypeP>임금신청기간</TypeP>
            <TypeSelect>
              <option value="month">매월</option>
              <option value="day">매일</option>
            </TypeSelect>
            <TypeSelect>
              <option value="1">1일</option>
              <option value="10">10알</option>
            </TypeSelect>
            ~
            <TypeSelect>
              <option value="12">12개월</option>
            </TypeSelect>
          </TypeWrap>
          <TypeWrap>
            <TypeP>임금지급시기 및 방법</TypeP>
            <TypeSelect>
              <option value="month">매월</option>
              <option value="day">매일</option>
            </TypeSelect>
            <TypeSelect>
              <option value="1">1일</option>
              <option value="10">10알</option>
            </TypeSelect>
            <TypeRadio type="radio" value="계좌이체" id="transfer" name="way" />
            <label fro="transfer">계좌이체</label>
            <TypeRadio type="radio" value="직접지급" id="direct" name="way" />
            <label fro="direct">직접지급</label>
          </TypeWrap>
          <TypeTitle>소정근로일/근무시간</TypeTitle>
          <TypeWrap>
            <TypeP>유급주휴일</TypeP>
            <TypeName />
          </TypeWrap>
          <TypeWrap>
            <TypeP>유급휴일</TypeP>
            <TypeSelect>
              <option value="일반근로">일반근로</option>
              <option value="일반근로2">일반근로2</option>
            </TypeSelect>
          </TypeWrap>
          <TypeWrap>
            <TypeP>무급휴일</TypeP>
            <TypeSelect>
              <option value="3">3개월</option>
              <option value="6">6개월</option>
              <option value="12">12개월</option>
            </TypeSelect>
          </TypeWrap>
          <TypeWrap>
            <TypeP>임금신청기간</TypeP>
            <TypeSelect>
              <option value="month">매월</option>
              <option value="day">매일</option>
            </TypeSelect>
            <TypeSelect>
              <option value="1">1일</option>
              <option value="10">10알</option>
            </TypeSelect>
            ~
            <TypeSelect>
              <option value="12">12개월</option>
            </TypeSelect>
          </TypeWrap>
          <TypeWrap>
            <TypeP>임금지급시기 및 방법</TypeP>
            <TypeSelect>
              <option value="month">매월</option>
              <option value="day">매일</option>
            </TypeSelect>
            <TypeSelect>
              <option value="1">1일</option>
              <option value="10">10알</option>
            </TypeSelect>
            <TypeRadio type="radio" value="계좌이체" id="transfer" name="way" />
            <label fro="transfer">계좌이체</label>
            <TypeRadio type="radio" value="직접지급" id="direct" name="way" />
            <label fro="direct">직접지급</label>
          </TypeWrap>
        </PreferenceForm>
        <PreferenceBtn onClick={toggle}>새로등록</PreferenceBtn>
      </PreferenceContainer>
    </>
  );
};
export default FullTimeSetting;
