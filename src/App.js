import React, {useEffect, useState } from 'react';
import { Switch, Route, useHistory, Redirect } from 'react-router-dom';

import { login, logout } from './utils/auth'

// component imports
import EditMenu from './components/EditMenu';
import ThreeColumnLayout from './layouts/ThreeColumnLayout';
import SingleColumnLayout from './layouts/SingleColumnLayout';
import RoboduckyVisual from './components/RoboDuckyVisual';
import Monolog from './components/Monolog';
import MenuButtonGroup from './components/MenuButtonGroup';
import Login from './components/Login';
import Admin from './components/Admin';
import ProtectedRoute from './components/ProtectedRoute';


const App = () => {

  const [ credentials, setCredentials ] = useState(null);
  const history = useHistory();

  const handleSetCredentials = (e) => {
    setCredentials(prevCredentials => ({
      ...prevCredentials,
      [e.target.name]: e.target.value
    }))
  }

  const handleLogin = async () => {
    await login(credentials)
    history.push('/admin')
  }

  const handleLogout = () => {
    logout()
    history.push('/login')
  }

  return (
    <div className="App">
      <Switch>
        <Route path="/login">
          <SingleColumnLayout><Login onLogin={handleLogin} onSetCredentials={handleSetCredentials} /></SingleColumnLayout>
        </Route>
        <ProtectedRoute path="/admin" component={Admin} onLogout={handleLogout} />
        <Route path="/add-tags">
          <ThreeColumnLayout><RoboduckyVisual key='leftComp'/><Monolog key='centerComp'/><MenuButtonGroup key='rightComp'/></ThreeColumnLayout>
        </Route>
        <Route path="/review-and-options">
          <ThreeColumnLayout><RoboduckyVisual key='leftComp'/><Monolog key='centerComp'/><MenuButtonGroup key='rightComp'/></ThreeColumnLayout>
        </Route>
        <Route path="/patiently-listening">
          <SingleColumnLayout><RoboduckyVisual key='visual'/></SingleColumnLayout>
        </Route>
        <Route path="/">
          <SingleColumnLayout><Redirect to="/login" /></SingleColumnLayout>
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
