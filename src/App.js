
import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import './App.css'
import {action,animation,crime,comdey,originals} from './Components/urls'
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';

function App() {
  return (
    <div className="App">
          <NavBar/>
          <Banner/>
          <RowPost url={originals} title='Natflix Originals'/>
          <RowPost url={action} title='Action' isSmall />
          <RowPost url={crime} title='Crime' isSmall />
          <RowPost url={animation} title='Animation' isSmall />
          <RowPost url={comdey} title='Comedy' isSmall />
    </div>
  );
}

export default App;
