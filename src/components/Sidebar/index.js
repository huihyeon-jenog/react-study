import React from "react";
import styles from "./asidestyle.module.css";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context";

const Sidebar = () => {
  const { setState } = useGlobalContext();
  return (
    <aside>
      <ul className={styles.snbWrap}>
        <li className={styles.title}>
          환경설정
          <ul>
            <li>
              <Link to="/fulltimepreference" onClick={() => setState("정규직")}>
                정규직
              </Link>
            </li>
            <li>
              <Link to="/dailyjobpreference" onClick={() => setState("일용직")}>
                일용직
              </Link>
            </li>
            <li>
              <Link to="/executivespreference" onClick={() => setState("임원")}>
                임원
              </Link>
            </li>
            <li>
              <Link
                to="/freelancerpreference"
                onClick={() => setState("프리랜서")}
              >
                프리랜서
              </Link>
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
