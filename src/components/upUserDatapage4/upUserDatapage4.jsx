import styles from './upUserDatapage4.module.css';
import React, { useState } from 'react';
import { interestOption } from '../../option';
import Issue from '../issue/issue';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons';
const UpUserDatapage4 = ({upBackPage3,upHandleSubmit}) => {
    const [interest,setInterest]=useState(new Set());

    const checkedItemHandler = (id, isChecked) => {
        if (isChecked) {
            interest.add(id);
            setInterest(interest);
        } else if (!isChecked && interest.has(id)) {
            interest.delete(id);
            setInterest(interest);
        }
      };
    return(
        <div className={styles.container}>
            <FontAwesomeIcon onClick={()=>upBackPage3()} className={styles.arrowIcon} icon={faArrowLeft}/>
        <form action="" onSubmit={(e)=>{
            e.preventDefault();
            if(interest.size>=3){
                upHandleSubmit(interest);
            }else{
                alert("완벽하게 다 적어주세요!");
            }
        }}>
        <p className={styles.selectTitle}>관심사를 알려주세요</p>
        <h4>키워드는 최소 3개 이상 선택해주세요.</h4>
        <div className={styles.interestBox}>
            {
                interestOption.map((item,index)=>{
                    return(
                        <Issue onCheckItem={checkedItemHandler} item={item} key={index} idx={index}/>
                    )
                })
            }
        </div>
        <button type="submit" className={styles.submitBtn}>다음</button>
        </form>
        </div>
    )
}

export default UpUserDatapage4;