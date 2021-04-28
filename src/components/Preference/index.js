import React from "react";
import { BsPencilSquare, BsTrash } from "react-icons/bs";
import { useGlobalContext } from "../../context";
import Header from "./Header";
import styles from "./Preference.module.css";

const Preference = () => {
  const { toggle } = useGlobalContext();
  return (
    <section className={styles.preferenceContainer}>
      <Header />
      <button onClick={toggle} className={styles.newBtn}>
        새로등록
      </button>
      <table className={styles.preferenceTable} summary="환경설정 테이블 목록">
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
