import React from "react";
import styles from "./asidestyle.module.css";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <aside>
      <ul className={styles.snbWrap}>
        <li className={styles.title}>
          환경설정
          <ul>
            <li>
              <Link to="/fulltimepreference">정규직</Link>
            </li>
            <li>
              <Link to="/dailyjobpreference">일용직</Link>
            </li>
            <li>
              <Link to="/executivespreference">임원</Link>
            </li>
            <li>
              <Link to="/freelancerpreference">프리랜서</Link>
            </li>
          </ul>
        </li>
        <li className={styles.title}>
          근로계약서 작성
          <ul>
            <li>
              <Link to="/">정규직</Link>
            </li>
            <li>
              <Link to="/">일용직</Link>
            </li>
            <li>
              <Link to="/">임원</Link>
            </li>
            <li>
              <Link to="/">프리랜서</Link>
            </li>
          </ul>
        </li>
        <li className={styles.title}>
          근로계약서 목록
          <ul>
            <li>
              <Link to="/">작성중 목록</Link>
            </li>
            <li>
              <Link to="/">서명대기 목록</Link>
            </li>
            <li>
              <Link to="/">서명완료 목록</Link>
            </li>
          </ul>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
