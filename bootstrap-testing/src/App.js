import logo from './logo.svg';
import './App.css';
import './style.css'  ; // the custom import file 


//import react

import 'bootstrap/dist/css/bootstrap.min.css';

//import nav_bar from './navBar';
import test_nav_bar from './testNavBar';
 




function App() {
  return (
    <div className="App">

     
      { test_nav_bar() }

  

    

    </div>
  );
}

export default App;
