import React, { useState } from 'react';
import styles from './userAuth.module.css';
import Join from '../join/join';
import Login from '../login/login';
const UserAuth = (props) => {
    const [select,setSelect] = useState("login");
    let description;
    if(select==="login") description = <Login/>;
    else if(select==="join") description =<Join/>;

    return (
        <section className={styles.container}>
            <div className={styles.selectAuth}>
                <div onClick={()=>{setSelect("join")}} className={styles.seletJoin}>Join</div>
                <div onClick={()=>{setSelect("login")}} className={styles.seletLogin}>Login</div>
            </div>
            <section className={styles.main}>{description}</section>
        </section>
    )
}

export default UserAuth;