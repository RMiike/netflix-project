import React from 'react';
import './css/App.css';
import Main from './pages';
import Login from './pages/Login.js';
import ChoosePlan from './pages/ChoosePlan.js'; 
import { Switch, Route} from 'react-router-dom'; 

function App() {
  return (
    <div>
        <Switch>
        <Route exact path='/'  component={Main}/>
        <Route path='/login'  component={Login}/>
        <Route path='/chooseplan'  component={ChoosePlan}/>

        </Switch>    
    </div>
  );
}

export default App;
