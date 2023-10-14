import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProfilePic from './ProfilePic';
import Navigationbar from "./components/navigation/Navigationbar";
function App() {
  return (
    <div className='App'>
      <h1>My Website</h1>
      <ProfilePic/>
      <Navigationbar/>
    </div>
  );
}

export default App;
