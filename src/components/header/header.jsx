import styles from "./header.module.css";
import { useHistory } from "react-router";
import AuthContainer from "../authContainer/authContainer";

const Header = ({onAuthkinds,onAuth}) =>{
    let history = useHistory();
    let authDisplay;

    const goAuth=(value)=>{
        if(value.target.innerText==="로그인"){
         onAuthkinds("login");
        }else if(value.target.innerText==="회원가입"){
         onAuthkinds("join");
        }
        history.push("/userAuth");
     }
    const trueAuth =
            <div className={styles.authContainer}>
            <button onClick={ goAuth }  className={styles.login}>로그인</button>
            <button onClick={ goAuth } className={styles.join}>회원가입</button>
            </div>

    const falseAuth = <AuthContainer/>


    if(!onAuth){
        authDisplay = trueAuth;
    }else{
        authDisplay = falseAuth;
    }
    return (
        <div className={styles.header}>
            <div className={styles.homeContainer}>
            <img className={styles.logo} src="/image/bunk-bed.png" alt="logo" />
            <p className={styles.title}>UniMate</p>
            </div>
            {authDisplay}
        </div>
    )
}

export default Header;