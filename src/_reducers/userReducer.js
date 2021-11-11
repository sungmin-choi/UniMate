import { LOGIN_USER, REGISTER_USER } from "../_actions/types";


const initialState = {
  firstName:"sungmin",
  lastName:"choi",
  email:"namja306@naver.com",
  id:"namja306",
  password:"csm0306",
  userDetail:null
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state =initialState, action) {
    switch (action.type) {
      case REGISTER_USER:
        return { ...state, loginSuccess: action.payload };
      case LOGIN_USER:
        return {...state,loginSuccess:action.payload};
      default:
        return state;
    }
  }