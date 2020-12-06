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
import UnknownWelcome from './components/UnknownWelcome';
import ConversationDetails from './components/ConversationDetails';

import ConversationContext from './contexts/ConversationContext';



const App = () => {


  // useState and handlers for auth / login / logout

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

  // use state for monolog - this is the useState for the conversation description.
  const [ monolog, setMonolog ] = useState(null);

  const handleSetMonolog = (e) => {
    setMonolog(e.target.value)
//    console.log(e.target.value)
  }

  return (
    //<ConversationContext.Provider>
      <div className="App">
        <Switch>
          <Route path="/login">
            <SingleColumnLayout><Login onLogin={handleLogin} onSetCredentials={handleSetCredentials} /></SingleColumnLayout>
          </Route>
          <ProtectedRoute path="/admin" component={Admin} onLogout={handleLogout} />
          <Route path="/add-tags">
            <ThreeColumnLayout><RoboduckyVisual key='leftComp' size="200"/><Monolog key='centerComp'/><MenuButtonGroup key='rightComp'/></ThreeColumnLayout>
          </Route>
          <Route path="/review-and-options">
            <ThreeColumnLayout><RoboduckyVisual key='leftComp' size="200"/><Monolog key='centerComp' onMonolog={handleSetMonolog} monologText={monolog} /><MenuButtonGroup key='rightComp'/></ThreeColumnLayout>
          </Route>
          <Route path="/conversation-details">
            <ThreeColumnLayout><RoboduckyVisual key='leftComp' size="200"/><ConversationDetails key='centerComp' /><MenuButtonGroup key='rightComp'/></ThreeColumnLayout>
          </Route>
          <Route path="/patiently-listening">
            <SingleColumnLayout><RoboduckyVisual key='visual'/></SingleColumnLayout>
          </Route>
          <Route path="/">
            <SingleColumnLayout><UnknownWelcome /></SingleColumnLayout>
          </Route>
        </Switch>
        
      </div>
    //</ConversationContext.Provider>
  );
}

export default App;
