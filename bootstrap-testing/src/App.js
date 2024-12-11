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
import Footer from './Footer';
import MarkDown from './MarkDown';


const title = "Tech";
const more_link = "www.google.com";
const card_para = "System design a multidisciplinary field that encompasses various aspects of designing the destributed ";
const img_src = "cards.jpg"; // public folder has all the images can go 
const img_src1 = "federated-learning-flow.png"; 
const card_url = "https://www.google.com";
const card_title =  "System Design";
const mark_down_data = "The classic example that we can understand dynamic programming with is the Fibonacci series, which can be solved both recursively and using dynamic programming.\n ### Recursive Approach \n ```python \ndef fibbo(nums):\n      if nums <= 1:\n        return 1\n      return fibbo(n-1) + fibbo(n-2)\n ```\n\n### Dynamic Programming with Memoization\n ```python\ndef fibonacci(n, memo={}):\n       if n in memo:\n         return memo[n]\n       if n <= 1:\n         return n\n       else:\n          memo[n] = fibonacci(n-1, memo) + fibonacci(n-2, memo)\n       return memo[n]\n ```\n\n### Dynamic Programming with Tabulation\n ```python\ndef fibonacci(n):\n        if n <= 1:\n            return n\n   \n        fib_table = [0] * (n + 1)\n        fib_table[1] = 1\n\n        for i in range(2, n + 1):\n           fib_table[i] = fib_table[i - 1] + fib_table[i - 2]\n\n        return fib_table[n]\n"








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

    
    
    <CustomBody>
      <HeadingBar title={title}/>     
     <CardBundle></CardBundle>
     <More more_link={ more_link}/>
     <HeadingBar title={title}/>
     
     <CardBundle></CardBundle>
     
     <More more_link={ more_link}/>
     <HeadingBar title={title}/>
     <CardBundle></CardBundle>

     <MarkDown mark_down_data={ mark_down_data }></MarkDown>
     
     <More more_link={ more_link}/>

     </CustomBody>

<Footer></Footer>

   
    

    {/*

      <h1>Message: {data.message}</h1>
      <p>Number: {data.number}</p>
    </div>
    */}

      




    </div>
  );
}

export default App;
