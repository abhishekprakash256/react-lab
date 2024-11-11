import logo from './logo.svg';
import './App.css';
import './style.css'  ; // the custom import file 
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar'
import HeadingBar from './HeadingBar';
import More from './More';

const title = "Tech"
const more_link = "#"

 

function App() {


  return (
    <div className="App">

      <NavBar/>
      <HeadingBar title={title}/>
      <More more_link={ more_link}/>




    </div>
  );
}

export default App;
