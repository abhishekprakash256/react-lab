import logo from './logo.svg';
import './App.css';

function App() {
const first_name = 'John';
const last_name = 'Wick' ;
const age = 28;
const job = 'Developer';
const enter_data = "Enter your data";

const test_arr = [1,2,3,];


const test_obj = {
  first_name : "Tom",
  last_name: "Cruise", 
  work : "Stuntman"
}

const get_full_name = ( first_name, last_name) => {
  return first_name + " "+   last_name
};

const input_field = <input placeholder= { enter_data }></input>

function test_container() {
  return (
    <div>
      <h2>Test Container</h2>
      <p>This is a test container component.</p>
      <p>Additional Content: {test_obj.first_name} {test_obj.last_name}</p>
    </div>
  );
}



return (
    <div className="App">
      <h1>{ "First Name " +  get_full_name(test_obj.first_name,last_name) }</h1>


      <p>Age: { age } </p>
      <p>Job : { test_obj.work } </p>
      { input_field } 

      <div>{ test_arr[1] }</div>  {/* Place test_arr[1] inside a paragraph tag */}

       { test_container() }  

    </div>
  );
}

export default App;
