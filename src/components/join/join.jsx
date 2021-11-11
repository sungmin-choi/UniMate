import React from 'react';
import styles from './join.module.css';
import { useState } from 'react';
import { registerUser } from '../../_actions/userAction';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
const Join = () => {
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [email,setEmail] = useState("");
    const [id,setId] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword]=useState("");
    const dispatch = useDispatch();
    const history = useHistory();
    const onSubmitHandler = (e) => {
        e.preventDefault();
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        if (password === confirmPassword) {
          let body = {
            user_name:lastName+firstName,
            user_mail:email,
            user_id:id,
            user_pwd:password,
          };
          dispatch(registerUser(body)).then((res) => {
            alert("가입이 정상적으로 완료되었습니다");
            history.push("/");
          });

        } else {
          alert("비밀번호가 일치하지 않습니다");
        }
      };
    return(
        <section className={styles.body}>
            <form onSubmit={onSubmitHandler} className={styles.container}>
                <input className={styles.input} value={firstName} onChange={(e)=>setFirstName(e.target.value)} type="text" placeholder="First Name" />
                <input className={styles.input} value={lastName} onChange={(e)=>setLastName(e.target.value)} type="text" placeholder="Last Name" />
                <input className={styles.input} value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Email" />
                <input className={styles.input} value={id} onChange={(e)=>setId(e.target.value)} type="text" placeholder="ID" />
                <input className={styles.input} value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" />
                <input className={styles.input} value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} type="password" placeholder="confirmPassword" />
                <button type="submit" className={styles.joinBtn}>Sign Up</button>
                <div className={styles.alert}>Already have an account? <span className={styles.SignIn}>Sign in</span></div>
            </form>
            
        </section>

        
    )
}


export default Join;