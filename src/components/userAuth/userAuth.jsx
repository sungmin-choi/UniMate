import React, { useRef, useState } from 'react';
import styles from './userAuth.module.css';
import Join from '../join/join';
import Login from '../login/login';
const UserAuth = (props) => {
    const [select,setSelect] = useState("login");
    let description;
    if(select==="login") description = <Login/>;
    else if(select==="join") {
        description =<Join/>;
    }
    return (
        <div className={styles.body}>
        <section className={styles.container}>
            <div className={styles.selectAuth}>
                <div onClick={()=>{setSelect("join")}} className={styles.seletJoin}>Sign Up</div>
                <div onClick={()=>{setSelect("login")}} className={styles.seletLogin}>Login</div>
            </div>
            <section className={styles.main}>{description}</section>
        </section>
        </div>
    )
}

export default UserAuth;