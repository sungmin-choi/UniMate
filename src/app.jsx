
import './app.module.css';
import Index from './components/index';
import UserAuth from './components/userAuth/userAuth';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Index/>
        </Route>
        <Route exact path="/userAuth">
          <UserAuth/>
        </Route>
    </Switch>
    </Router>
  );
}

export default App;
