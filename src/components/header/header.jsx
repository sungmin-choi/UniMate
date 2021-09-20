import styles from "./header.module.css";

import React from 'react';

const Header = (props) =>{
    return (
        <div className={styles.header}>
            <div className={styles.homeContainer}>
            <img className={styles.logo} src="/image/bunk-bed.png" alt="logo" />
            <p className={styles.title}>UniMate</p>
            </div>
            <div className={styles.authContainer}>
            <button className={styles.login}>로그인</button>
            <button className={styles.join}>회원가입</button>
            </div>
        </div>
    )
}

export default Header;