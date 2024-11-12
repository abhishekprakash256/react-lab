import logo from './logo.svg';
import './App.css';
import './style.css'  ; // the custom import file 
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar'
import HeadingBar from './HeadingBar';
import More from './More';
import CardTemp from './Card';
import CardBundle from './CardBundle'
import GroupExample from './GroupExample';
import TestGrid from "./TestGrid"
import CustomBody from "./CustomBody"




const title = "Tech";
const more_link = "#";
const card_para = "System design a multidisciplinary field that encompasses various aspects of designing the destributed ";
const img_src = "cards.jpg"; // public folder has all the images can go 
const img_src1 = "federated-learning-flow.png"; 
const card_url = "https://www.google.com";
const card_title =  "System Design";



function App() {


  return (
    <div className="App">

      <NavBar/>

    <CustomBody>
      <HeadingBar title={title}/>
      <More more_link={ more_link}/>
      
      



     <CardBundle></CardBundle>
     <More></More>


     </CustomBody>
   

      




    </div>
  );
}

export default App;
