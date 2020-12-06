import React, {useEffect, useState } from 'react';
import { Switch, Route, useHistory, Redirect } from 'react-router-dom';

import { login, logout } from './utils/auth'

// component imports
import EditMenu from './components/EditMenu';
import ThreeColumnLayout from './layouts/ThreeColumnLayout';
import SingleColumnLayout from './layouts/SingleColumnLayout';
import RoboduckyVisual from './components/RoboDuckyVisual';
import MonologTwo from './components/MonologTwo';
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
  const [ currentSolution, setCurrentSolution ] = useState(null);
  const [ currentTags, setCurrentTags ] = useState(null);
  const [ currentMood, setCurrentMood ] = useState(null);

  const handleSetMonolog = (e) => {
    setMonolog(e.target.value)
//    console.log(e.target.value)
  }

  const handleSetCurrentSolution = (e) => {
    setCurrentSolution(e.target.value)
//    console.log(e.target.value)
  }

  const handleSetCurrentTags = (e) => {
    setCurrentTags(e.target.value)
//    console.log(e.target.value)
  }

  const handleSetCurrentMood = (e) => {
    setCurrentMood(e.target.value)
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
            <ThreeColumnLayout><RoboduckyVisual key='leftComp' size="200"/><MonologTwo key='centerComp'/><MenuButtonGroup key='rightComp'/></ThreeColumnLayout>
          </Route>
          <Route path="/review-and-options">
            <ThreeColumnLayout>
              <RoboduckyVisual key='leftComp' size="200"/>
              <MonologTwo 
                key='centerComp'
                onMonolog={handleSetMonolog}
                monologText={monolog}
                onCurrentSolution={handleSetCurrentSolution}
                currentSolution={currentSolution}
                onCurrentTags={handleSetCurrentTags}
                currentTags={currentTags}
                onCurrentMood={handleSetCurrentMood}
                currentMood={currentMood}
              />
              <MenuButtonGroup key='rightComp' 
                onMonolog={handleSetMonolog}
                monologText={monolog}
                onCurrentSolution={handleSetCurrentSolution}
                currentSolution={currentSolution}
                onCurrentTags={handleSetCurrentTags}
                currentTags={currentTags}
                onCurrentMood={handleSetCurrentMood}
                currentMood={currentMood}/>
            </ThreeColumnLayout>
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
