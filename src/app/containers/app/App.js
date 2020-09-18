import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars'
import './App.css';
import "../../assets/style.css"
import Main from '../../components/main';
import Itineraries from '../../components/itinerary/listItineraries';
import ItiDesc from '../../components/itinerary/itiDesc';


function App() {
  return (
    <>
      <Scrollbars style={{ height: '100vh' }} className="scrollBars"
				renderView={props => <div {...props} className="scrollContainer" />}
				renderTrackHorizontal={props => <div {...props} style={{ display: 'none' }} className="track-horizontal" />}>
        <Router>
          <Switch>
            <Route exact path="/" component={Main}/>
            <Route exact path="/itinerary" component={Itineraries}/>
            <Route exact path="/itidesc" component={ItiDesc}/>
          </Switch>
        </Router>
      </Scrollbars>
    </>
  );
}

export default App;
