import styles from './upUserDatapage5.module.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons';
const UpUserDatapage5 = ({upBackPage4,upHandleSubmit}) => {
    const [lifePattern,setLifePattern] = useState(null);
    const [smoke,setSmoke] = useState(null);
    const [introduce,setIntroduce]= useState(null);
    return(
        <div className={styles.container}>
            <FontAwesomeIcon onClick={()=>upBackPage4()} className={styles.arrowIcon} icon={faArrowLeft}/>
        <form action="" onSubmit={(e)=>{
            e.preventDefault();
        }}>
        <p className={styles.selectTitle}>라이프스타일을 알려주세요</p>
        <div className={styles.lifePatternBox}>
                <p className={styles.selectText}>생활패턴</p>
                <div className={styles.box}>
                <input type="radio" name="lifeStyle" value="morning" id="morning" onChange={(e)=>setLifePattern(e.target.value)} />
                <label className={styles.selectLifePattern} id="morningBtn" htmlFor="morning">
                아침형</label>
                <input type="radio" name="lifeStyle" value="night"  id="night" onChange={(e)=>setLifePattern(e.target.value)}/>
                <label className={styles.selectLifePattern} id="nightBtn" htmlFor="night">
                저녁형</label>
                </div>
         </div>
         <div className={styles.smokeBox}>
                <p className={styles.selectText}>흡연여부</p>
                <div className={styles.box}>
                <input type="radio" name="smoke" value="smoking" id="smoking" onChange={(e)=>setSmoke(e.target.value)} />
                <label className={styles.selectSmoke} id="smokingBtn" htmlFor="smoking">
                흡연</label>
                <input type="radio" name="smoke" value="none"  id="none" onChange={(e)=>setSmoke(e.target.value)}/>
                <label className={styles.selectSmoke} id="noneBtn" htmlFor="none">
                비흡연</label>
                </div>
         </div>
         <p className={styles.selectTitle}>자신을 소개해주세요</p>
         <textarea placeholder="자기소개를 작성해주세요(최대400자)" className={styles.introduce} name="" id="" cols="30" rows="10">
         </textarea>
        <button type="submit" className={styles.submitBtn}>다음</button>
        </form>
        </div>
    )
}

export default UpUserDatapage5;