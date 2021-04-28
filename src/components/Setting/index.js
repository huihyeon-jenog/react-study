import React, { useState } from "react";
import { useGlobalContext } from "../../context";
import Header from "../Preference/Header";
import styles from "./SettingStyle.module.css";
import { BsPencilSquare, BsTrash } from "react-icons/bs";
import WorkingCondition from "./WorkingCondition";
import { salaryItem } from "../Data";

const Setting = () => {
  const { toggle } = useGlobalContext();
  const [tableitem, setTableitem] = useState(salaryItem);

  console.log(tableitem);
  const tableAdd = () => {
    const table = document;
  };
  return (
    <section className={styles.settingContainer}>
      <Header />
      <form className={styles.settingFmWrapper} action="/" method="get">
        <fieldset className={styles.settingFieldset}>
          <div className={styles.itemWrapper}>
            <label className={styles.labelName} htmlFor="typeName">
              타입명
            </label>
            <input
              type="text"
              className={styles.labelInputText}
              id="typeName"
              name="typeName"
            />
          </div>
          <WorkingCondition />
          <h2>급여항목</h2>
          <input type="button" value="항목추가" />
          <table className={styles.preferenceTable} summary="급여항목 테이블">
            <thead className={styles.preferenceThead}>
              <tr>
                <th id="항목">항목</th>
                <th id="과세/비과세">과세/비과세</th>
                <th id="통상임금">통상임금</th>
                <th id="평균임금">평균임금</th>
                <th id="관리">관리</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </fieldset>
      </form>

      <button onClick={toggle}>저장하기</button>
      <button onClick={toggle}>취소</button>
    </section>
  );
};
export default Setting;
