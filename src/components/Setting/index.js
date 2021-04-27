import React from "react";
import styles from "./SettingStyle.module.css";
const Setting = ({ toggle, preference }) => {
  return (
    <section>
      <div className={styles.top}>
        <h1 className={styles.preferenceTitle}>{preference} 환경설정</h1>
        <span>&gt;&gt;환경설정 &gt;{preference}</span>
      </div>
      <form></form>
    </section>
  );
};
export default Setting;
