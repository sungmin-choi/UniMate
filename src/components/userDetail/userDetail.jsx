import styles from "./userDetail.module.css";
import React from 'react';
import UpUserData from "../upUserData/upUserData";

const UserDetail = ({userData,onHandleUpload}) => {
    let container;
    if(userData.userDetail===null){
        container = <UpUserData userData={userData} onHandleUpload={(data)=>onHandleUpload(data)}/>
    }
    return(
       <div className="">{container}</div>
    )
}

export default UserDetail;