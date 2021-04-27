import React from "react";
import { BsPencilSquare, BsTrash } from "react-icons/bs";
import styles from "./Preference.module.css";

const Preference = ({ toggle, preference }) => {
  return (
    <section className={styles.preferenceContainer}>
      <div className={styles.top}>
        <h1 className={styles.preferenceTitle}>{preference} 환경설정</h1>
        <span>&gt;&gt;환경설정 &gt;{preference}</span>
      </div>
      <button onClick={toggle} className={styles.newBtn}>
        새로등록
      </button>
      <table className={styles.preferenceTable}>
        <thead className={styles.preferenceThead}>
          <tr>
            <td>타입명</td>
            <td>근로형태</td>
            <td>관리</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>기본</td>
            <td>일반근로</td>
            <td>
              <BsPencilSquare />
              <BsTrash />
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Preference;
