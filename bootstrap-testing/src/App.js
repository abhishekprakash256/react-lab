import logo from './logo.svg';
import './App.css';
import './style.css'  ; // the custom import file 
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar'
import HeadingBar from './HeadingBar';
import More from './More';
import CardTemp from './Card';






const title = "Tech";
const more_link = "#";
const card_para = "System design a multidisciplinary field that encompasses various aspects of designing the destributed systems..";
const img_src = "cards.jpg"; // public folder has all the images can go 
const card_url = "https://www.google.com";




function App() {


  return (
    <div className="App">

      <NavBar/>
      <HeadingBar title={title}/>
      <More more_link={ more_link}/>
      < CardTemp card_para = { card_para } img_src={ img_src }  card_url = { card_url }/>
      < CardTemp card_para = { card_para } img_src={ img_src }  card_url = { card_url }/>




    </div>
  );
}

export default App;
