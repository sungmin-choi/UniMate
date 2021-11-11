import styles from "./upUserData.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle} from '@fortawesome/free-solid-svg-icons';
import UpUserDatapage3 from "../upUserDatapage3/upUserDatapage3";
import { interestOption,lifeOption,smokeOption } from "../../option";
import UpUserDatapage2 from "../upUserDatapage2/upUserDatapage2";
import UpUserDatapage4 from "../upUserDatapage4/upUserDatapage4";
import UpUserDatapage5 from "../upUserDatapage5/upUserDatapage5";
import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
const UpUserData = ({userData}) => {
    const [dateOfBirth,setDateOfBirth] = useState(null);
    const [gender,setGender] = useState(null);
    const [country,setCountry] = useState(null);
    const [major,setMajor] = useState(null);
    const [tendency,setTendency] = useState(new Set());
    const [interest,setInterest] = useState(new Set());
    const [lifePattern,setLifePattern] = useState(null);
    const [smoke,setSmoke] = useState(null);
    const [introduce,setIntroduce]= useState(null);
    const [profile,setProfile]=useState(null);
    const [display,setDisplay]=useState(null);




    const handleBackpage1 = ()=>{
        setDateOfBirth(null);
        setGender(null);
        setCountry(null);
        setDisplay(<div className={styles.container}>
            <FontAwesomeIcon className={styles.userIcon} icon={faUserCircle} />
            <p className={styles.name}>{userData.lastName} {userData.firstName}</p>
            <p className={styles.text1}>아직 프로필을 작성하지 않으셨네요! <br /> 프로필을 등록 해주세요.</p>
            <button className={styles.submitBtn} onClick={()=>{handleSecondDisplay();}}>프로필 등록하기</button>
            </div>);
    }
    const handleBackpage2=()=>{
        setMajor(null);
        setTendency(new Set());
        setDisplay(<UpUserDatapage2 upHandleSubmit={handleSubmitPage2} upBackPage1={handleBackpage1}/>)
    }
    const handleBackpage3=()=>{
        setInterest(new Set());
        setDisplay(<UpUserDatapage3 upHandleSubmit={handleSubmitPage3} upBackPage2={handleBackpage2}/>);
    }
    const handleBackpage4=()=>{
        setDisplay(<UpUserDatapage4 upHandleSubmit={handleSubmitPage4} upBackPage3={handleBackpage3}/>);
    }
    


    const handleSubmitPage5=()=>{

    }
    const handleSubmitPage4=(interest)=>{
        setInterest(interest);
        setDisplay(<UpUserDatapage5 upHandleSubmit={handleSubmitPage5} upBackPage4={handleBackpage4}/>);

    }
    const handleSubmitPage3 = (major,tendency)=>{
        setMajor(major);
        setTendency(tendency);
        setDisplay(<UpUserDatapage4 upHandleSubmit={handleSubmitPage4} upBackPage3={handleBackpage3}/>);
    }
    const handleSubmitPage2 =(date,gender,country)=>{
        setDateOfBirth(date);
        setGender(gender);
        setCountry(country);
        setDisplay(<UpUserDatapage3 upHandleSubmit={handleSubmitPage3} upBackPage2={handleBackpage2}/>);
    }
    const handleSecondDisplay=()=>{
        setDisplay(<UpUserDatapage2 upHandleSubmit={handleSubmitPage2} upBackPage1={handleBackpage1}/>);
    }
    useEffect(() => {
        console.log(dateOfBirth,gender,country);
        if(userData.userDetail===null){
            setDisplay(<div className={styles.container}>
                <FontAwesomeIcon className={styles.userIcon} icon={faUserCircle} />
                <p className={styles.name}>{userData.lastName} {userData.firstName}</p>
                <p className={styles.text1}>아직 프로필을 작성하지 않으셨네요! <br /> 프로필을 등록 해주세요.</p>
                <button className={styles.submitBtn} onClick={()=>{handleSecondDisplay();}}>프로필 등록하기</button>
                </div>);
                }
      }, []);
    return(
    <div className={styles.body}>
        {display}
    </div>
    )
}
const mapStateToProps = ({user})=>{
    return{
        userData:user
    }
    
}

export default connect(mapStateToProps)(UpUserData);