import styles from './authContainer.module.css';
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle,faHeart,faCommentDots,faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router';


const AuthContainer = (props) => {
    const history = useHistory();
    return(
        <div className={styles.authContainer}>
        <div className={styles.iconBox}>
        <FontAwesomeIcon className={styles.icon} icon={faCalendarAlt} />
        <div className={styles.mark}>예약</div>
        </div>
        <div className={styles.iconBox}>
         <FontAwesomeIcon className={styles.icon} icon={faCommentDots} />
         <div className={styles.mark}>메시지</div>
         </div>
         <div className={styles.iconBox}>
         <FontAwesomeIcon className={styles.icon} icon={faHeart} />
         <div className={styles.mark}>관심목록</div>
         </div>
         <div onClick={()=>history.push("/userDetail")} className={styles.userBox}>
         <FontAwesomeIcon className={styles.userIcon} icon={faUserCircle} />
         </div>
        </div>
    )
}
export default AuthContainer;