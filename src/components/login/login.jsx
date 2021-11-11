import React from 'react';
import styles from './login.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../_actions/userAction';
import { useHistory } from 'react-router';
const Login = (props) => {
    const [userId,setUserId]=useState("");
    const [password,setPassword]=useState("");
    const dispatch = useDispatch();
    const history = useHistory();
    const onSubmitHandler = (e)=>{
        e.preventDefault();
        let body = {
            user_id:userId,
            user_pwd:password,
          };
          dispatch(loginUser(body));
          history.push("/");
    };
    return(
        <section className={styles.body}>
        <form onSubmit={onSubmitHandler} className={styles.container}>
            <input className={styles.input} value={userId} onChange={(e)=>setUserId(e.target.value)} type="text" placeholder="userId" />
            <input className={styles.input} value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" />
            <button type="submit" className={styles.loginBtn}>Login</button>
            <div className={styles.findId}>
                <span className={styles.fid} >Forget your ID?</span>
                <span className={styles.fpw} >Forget your password?</span>
            </div>
            <div className={styles.alert}>Don't have an account yet? <span className={styles.SignUp}>Sign up</span></div>
        </form>
    </section>
    )
}

export default Login;