import React from 'react';
import styles from './upUserDatapage2.module.css';
import { countryOption } from '../../option';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Select from 'react-select'
const UpUserDatapage2 = ({upHandleSubmit,upBackPage1}) =>{
    const [dateOfBirth,setDateOfBirth] = useState(null);
    const [gender,setGender] = useState(null);
    const [country,setCountry] = useState(null);
    return(
        <div className={styles.container}>
            <FontAwesomeIcon onClick={()=>upBackPage1()} className={styles.arrowIcon} icon={faArrowLeft}/>
            <form action="" onSubmit={(e)=>{
                e.preventDefault();
                if(dateOfBirth&&gender&&country){
                    upHandleSubmit(dateOfBirth,gender,country);
                }else{
                    alert("완벽하게 다 적어주세요!");
                }
            }}>
            <p className={styles.selectTitle}>나에 대해 알려주세요</p>
            <input className={styles.inputBirth} type="text" placeholder="생년월일 ex)19970306"  onChange={(e)=>setDateOfBirth(e.target.value)}/>
            <div className={styles.genderBox}>
                <input type="radio" name="gender" value="female" id="female" onChange={(e)=>setGender(e.target.value)} />
                <input type="radio" name="gender" value="male"  id="male" onChange={(e)=>setGender(e.target.value)}/>
                <label className={styles.selectGender} id="femaleBtn" htmlFor="female">여성</label>
                <label className={styles.selectGender} id="maleBtn" htmlFor="male">남성</label>
            </div>
            <p className={styles.selectTitle}>출신 국가를 알려주세요</p>
            <Select className={styles.countryOption}  options={countryOption} onChange={(e)=>setCountry(e.label)} />
            <button type="submit" className={styles.submitBtn}>다음</button>
            </form>
            </div>
    )
}

export default UpUserDatapage2;