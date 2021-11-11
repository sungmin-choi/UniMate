import {React,useState} from 'react';
import styles from "./upUserDatapage3.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import { majorOption,tendencyOption } from '../../option';
import Issue from '../issue/issue'
import Select from 'react-select'
const UpUserDatapage3 = ({upBackPage2,upHandleSubmit}) => {
    const [major,setMajor] = useState(null);
    const [tendency,setTendency] = useState(new Set());


    const checkedItemHandler = (id, isChecked) => {
        if (isChecked) {
            tendency.add(id);
          setTendency(tendency);
        } else if (!isChecked && tendency.has(id)) {
            tendency.delete(id);
          setTendency(tendency);
        }
      };


    return(
        <div className={styles.container}>
        <FontAwesomeIcon onClick={()=>upBackPage2()} className={styles.arrowIcon} icon={faArrowLeft}/>
        <form action="" onSubmit={(e)=>{
            e.preventDefault();
            if(major && tendency.size>=3){
                upHandleSubmit(major,tendency);
            }else{
                alert("완벽하게 다 적어주세요!");
            }
        }}>
        <p className={styles.selectTitle}>소속 학과를 알려주세요</p>
        <Select className={styles.majorOption}  options={majorOption} onChange={(e)=>setMajor(e.label)} />
        <p className={styles.selectTitle}>성향을 알려주세요</p>
        <h4>키워드는 최소 3개 이상 선택해주세요.</h4>
        <form className={styles.tendencyBox}>
            {
                tendencyOption.map((item,index)=>{
                    return(
                        <Issue onCheckItem={checkedItemHandler} item={item} key={index} idx={index}/>
                    )
                })
            }
        </form>
        <button type="submit" className={styles.submitBtn}>다음</button>
        </form>
        </div>
    )

}

export default UpUserDatapage3;