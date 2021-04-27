import React from "react";
import styles from "./MainContentStyle.module.css";
import { BsPencilSquare } from "react-icons/bs";
import { MdAssignment } from "react-icons/md";
const Main = () => {
  return (
    <section className={styles.mainContainer}>
      <div className={styles.itemWrap}>
        <div className={styles.item}>
          <BsPencilSquare className={styles.icon} />
          <span className={styles.hits}>12건</span>
          <span>작성중</span>
        </div>
        <div className={styles.item}>
          <MdAssignment className={styles.icon} />
          <span className={styles.hits}>12건</span>
          <span>서명대기중</span>
        </div>
      </div>

      <div className={styles.btnWrap}>
        <button>근로계약서 작성</button>
        <button>작성중 목록</button>
      </div>
    </section>
  );
};

export default Main;
