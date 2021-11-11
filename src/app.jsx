
import './app.module.css';
import Index from './components/index';
import UserAuth from './components/userAuth/userAuth';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import UserDetail from './components/userDetail/userDetail';
import Header from './components/header/header';
import { useState } from 'react';
function App() {

  const [authKinds,setAuthKinds] = useState("login");
  const [authen,setAuthen] = useState({
    firstName:"sungmin",
    lastName:"choi",
    mail:"namja306@naver.com",
    id:"namja306",
    userDetail:null,
  });
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Header onAuth={authen} onAuthkinds={(data)=>setAuthKinds(data)}/>
          <Index />
        </Route>
        <Route exact path="/userAuth">
          <UserAuth onAuthkinds={authKinds}/>
        </Route>
        <Route exact path="/userDetail">
        <Header onAuth={authen} onAuthkinds={(data)=>setAuthKinds(data)}/>
          <UserDetail userData={authen} onHandleUpload={(data)=>{setAuthen(data);
          console.log(data);}}/>
        </Route>
    </Switch>
    </Router>
  );
}

export default App;
