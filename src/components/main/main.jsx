import React from "react";
import styles from "./main.module.css";
import Header from "../header/header";

const Main = (props) => {
  return (
    <>
      <Header />
      <section className={styles.container}>
        <div className={styles.quiz}>
          <span className={styles.text}>안녕하세요! OOO님</span>
          {/* 로그인한 유저의 이름을 OOO에 넣어줘야 함 */}
          <div className={styles.quizBox}>
            <span className={styles.quizText}>
              이제까지 정리한
              <br />
              지식을 검증해보고 싶다면?
            </span>
            <button className={styles.quizBtn}>퀴즈 풀러 가기</button>
          </div>
        </div>
        <div className={styles.study}>
          <div className={styles.studyBox}>
            <span className={styles.studyText}>학습 중</span>
            <button className={styles.addBtn}>문제집 추가</button>
          </div>
          <div className={styles.books}></div>
        </div>
      </section>
    </>
  );
};

export default Main;
