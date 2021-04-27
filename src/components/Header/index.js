import React from "react";
import { HiOutlineBell } from "react-icons/hi";
import styles from "./headerstyle.module.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <div className={styles.headerWrap}>
        <h1>
          <Link to="/" className={styles.logo}>
            Amaranth10
          </Link>
        </h1>
        <div>
          <span>님 반갑습니다.</span>
          <button className={styles.bellBtn}>
            <HiOutlineBell />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
