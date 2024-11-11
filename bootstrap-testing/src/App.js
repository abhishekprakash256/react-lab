import logo from './logo.svg';
import './App.css';
import './style.css'  ; // the custom import file 


//import react

import 'bootstrap/dist/css/bootstrap.min.css';

//import nav_bar from './navBar';
import navbarScroll from './testNavBar';
 




function App() {
  return (
    <div className="App">

     
      { navbarScroll() }

  

    

    </div>
  );
}

export default App;
