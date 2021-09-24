import React from 'react';
import styles from './join.module.css';
const Join = (props) => {
    return(
        <section className={styles.body}>
            <form className={styles.container}>
                <input className={styles.input} type="text" placeholder="First Name" />
                <input className={styles.input} type="text" placeholder="Last Name" />
                <input className={styles.input} type="email" placeholder="Email" />
                <input className={styles.input} type="text" placeholder="ID" />
                <input className={styles.input} type="password" placeholder="Password" />
                <input className={styles.input} type="password" placeholder="Check Password" />
                <button className={styles.joinBtn}>Sign Up</button>

                <div className={styles.alert}>Already have an account? <span className={styles.SignIn}>Sign in</span></div>
            </form>
            
        </section>

        
    )
}

export default Join;