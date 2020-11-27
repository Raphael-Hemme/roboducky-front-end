import React from 'react';
import { Switch, Route } from 'react-router-dom';


// component imports
import EditMenu from './components/EditMenu';
import ThreeColumnLayout from './layouts/ThreeColumnLayout';
import SingleColumnLayout from './layouts/SingleColumnLayout';
import RoboduckyVisual from './components/RoboDuckyVisual';
import Monolog from './components/Monolog';
import MenuButtonGroup from './components/MenuButtonGroup';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/review-and-options">
          <ThreeColumnLayout><RoboduckyVisual key='leftComp'/><Monolog key='centerComp'/><MenuButtonGroup key='rightComp'/></ThreeColumnLayout>
        </Route>
        <Route path="/patiently-listening">
          <SingleColumnLayout><RoboduckyVisual key='visual'/></SingleColumnLayout>
        </Route>
        <Route path="/">
          <SingleColumnLayout><RoboduckyVisual key='visual'/></SingleColumnLayout>
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
