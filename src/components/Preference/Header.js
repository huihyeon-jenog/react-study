import React from "react";
import { useGlobalContext } from "../../context";
import styles from "./Preference.module.css";

export default function Header() {
  const { state, setting } = useGlobalContext();
  return (
    <div className={styles.top}>
      <h1>{state} 환경설정</h1>
      <span>
        환경설정 / {state}
        {setting ? " / 새로등록" : null}
      </span>
    </div>
  );
}
