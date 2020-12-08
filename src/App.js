import React, {useEffect, useState } from 'react';
import { Switch, Route, useHistory, Redirect } from 'react-router-dom';

import { login, logout, setAuthHeaders, saveConversation } from './utils/auth'

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
import GeneralWelcome from './components/GeneralWelcome';
import ConversationDetails from './components/ConversationDetails';
import NotFound from './components/NotFound';
import ListAllConversations from './components/ListAllConversations';

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
    history.push('/review-and-options')
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

  const handleSaveConversation = () => {
    saveConversation({
      monolog,
      currentSolution,
      currentTags,
      currentMood,
    })
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
          <ProtectedRoute path="/review-and-options">
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
              <MenuButtonGroup 
                key='rightComp' 
                onMonolog={handleSetMonolog}
                monologText={monolog}
                onCurrentSolution={handleSetCurrentSolution}
                currentSolution={currentSolution}
                onCurrentTags={handleSetCurrentTags}
                currentTags={currentTags}
                onCurrentMood={handleSetCurrentMood}
                currentMood={currentMood}
                onSaveConversation={handleSaveConversation}
                onLogout={handleLogout}
              />
            </ThreeColumnLayout>
          </ProtectedRoute>
          <ProtectedRoute path="/previous-conversations">
            <ThreeColumnLayout>
              <RoboduckyVisual key='leftComp' size="200"/>
              <ListAllConversations key='centerComp' />
              <MenuButtonGroup 
                key='rightComp' 
                onMonolog={handleSetMonolog}
                monologText={monolog}
                onCurrentSolution={handleSetCurrentSolution}
                currentSolution={currentSolution}
                onCurrentTags={handleSetCurrentTags}
                currentTags={currentTags}
                onCurrentMood={handleSetCurrentMood}
                currentMood={currentMood}
                onSaveConversation={handleSaveConversation}
                onLogout={handleLogout}
              />
            </ThreeColumnLayout>
          </ProtectedRoute>
          <ProtectedRoute path="/conversation-details/:id">
            <ThreeColumnLayout>
              <RoboduckyVisual key='leftComp' size="200"/>
              <ConversationDetails 
                key='centerComp'
                monologText={monolog}
                currentSolution={currentSolution}
                currentTags={currentTags}
                currentMood={currentMood}
                />
              <MenuButtonGroup 
                key='rightComp'
                onMonolog={handleSetMonolog}
                monologText={monolog}
                onCurrentSolution={handleSetCurrentSolution}
                currentSolution={currentSolution}
                onCurrentTags={handleSetCurrentTags}
                currentTags={currentTags}
                onCurrentMood={handleSetCurrentMood}
                currentMood={currentMood}
                onSaveConversation={handleSaveConversation}
                onLogout={handleLogout}
              />
            </ThreeColumnLayout>
          </ProtectedRoute>
          <Route path="/patiently-listening">
            <SingleColumnLayout><RoboduckyVisual key='visual'/></SingleColumnLayout>
          </Route>
          <Route path="/404">
            <SingleColumnLayout><NotFound /></SingleColumnLayout>
          </Route>
          <Route path="/">
            <SingleColumnLayout><GeneralWelcome /></SingleColumnLayout>
          </Route>
        </Switch>
        
      </div>
    //</ConversationContext.Provider>
  );
}

export default App;
