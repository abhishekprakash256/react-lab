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
const more_link = "www.google.com";
const card_para = "System design a multidisciplinary field that encompasses various aspects of designing the destributed ";
const img_src = "cards.jpg"; // public folder has all the images can go 
const img_src1 = "federated-learning-flow.png"; 
const card_url = "https://www.google.com";
const card_title =  "System Design";








function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);


  /*
  useEffect(() => {
    fetch("http://127.0.0.1:5000/data")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
 */



  return (


    <div className="App">

<NavBar></NavBar> 

    {
    
    <CustomBody>
      <HeadingBar title={title}/>     
     <CardBundle></CardBundle>
     <More more_link={ more_link}/>
     <HeadingBar title={title}/>
     
     <CardBundle></CardBundle>
     
     <More more_link={ more_link}/>
     <HeadingBar title={title}/>
     <CardBundle></CardBundle>
     <More more_link={ more_link}/>
     </CustomBody>
   
    }

    {/*

      <h1>Message: {data.message}</h1>
      <p>Number: {data.number}</p>
    </div>
    */}

      




    </div>
  );
}

export default App;
