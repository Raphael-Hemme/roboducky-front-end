import React from 'react';
import { Switch, Route } from 'react-router-dom';


// component imports
import EditMenu from './components/EditMenu';
import ThreeColumnLayout from './layouts/ThreeColumnLayout';
import SingleColumnLayout from './layouts/SingleColumnLayout';
import RoboduckyVisual from './components/RoboDuckyVisual';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/tr">
          <ThreeColumnLayout><RoboduckyVisual key='visual'/><EditMenu key='editmenu'/></ThreeColumnLayout>
        </Route>
        <Route path="/">
          <SingleColumnLayout><RoboduckyVisual /></SingleColumnLayout>
        </Route>

      </Switch>
      
    </div>
  );
}

export default App;
