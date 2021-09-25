import React from 'react';
import styles from './login.module.css';

const Login = (props) => {
    return(
        <section className={styles.body}>
        <form className={styles.container}>
            <input className={styles.input} type="text" placeholder="UserName or Email" />
            <input className={styles.input} type="password" placeholder="Password" />
            <button className={styles.loginBtn}>Login</button>
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