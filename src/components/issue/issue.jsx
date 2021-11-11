import styles from './issue.module.css';
import {React,useState} from 'react';
import styled from 'styled-components';
const Issue = ({item,idx,onCheckItem}) => {
    const [bChecked, setChecked] = useState(false);

    const checkHandler = ({ target }) => {
      setChecked(!bChecked);
      onCheckItem(target.id,!bChecked);
    };
    return(
        <label htmlFor={idx} id={`l${idx}`} name="checkLabel" className={styles.tendencyCheckbox}>
        <input type="checkbox" name="cb" checked={bChecked} onChange={(e)=>checkHandler(e)} id={idx} className={styles.tendencyInput}/>
        {item.label}
        </label>

    )
}

export default Issue;