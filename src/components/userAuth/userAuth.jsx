import React, { useState } from 'react';
import styles from './userAuth.module.css';
import Join from '../join/join';
import Login from '../login/login';
const UserAuth = ({onAuthkinds}) => {
    const [select,setSelect] = useState(onAuthkinds);
    let description;
    let displayJoin;
    let displayLogin;
    if(select==="login") {
        description = <Login/>;
        displayJoin = styles.grey;
        displayLogin = styles.white;
    }
    else if(select==="join") {
        description =<Join/>;
        displayJoin = styles.white;
        displayLogin = styles.grey;
    }
    return (
        <div className={styles.body}>
        <section className={styles.container}>
            <div className={styles.selectAuth}>
                <div onClick={()=>{setSelect("join")}} className={`${styles.seletJoin} ${displayJoin}`}>Sign Up</div>
                <div onClick={()=>{setSelect("login")}} className={`${styles.seletLogin} ${displayLogin}`}>Login</div>
            </div>
            <section className={styles.main}>{description}</section>
        </section>
        </div>
    )
}

export default UserAuth;