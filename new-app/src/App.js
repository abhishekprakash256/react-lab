import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
const first_name = 'John';
const last_name = 'Wick' ;
const age = 28;
const job = 'Developer';
const enter_data = "Enter your data";

const test_arr = [1,2,3,];

const title = "Ths is title"


const test_obj = {
  first_name : "Tom",
  last_name: "Cruise", 
  work : "Stuntman"
}

const get_full_name = ( first_name, last_name) => {
  return first_name + " "+   last_name
};

const input_field = <input placeholder= { enter_data }></input>

function title_header() {
  return (
    <div className="row p-3">
      <div className="col text-center background-color-body rounded">
        <h1 className="bio-font font-color-class heading-responsive-font mb-2 mt-2">{title}</h1>
      </div>
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

      { title_header() }

    </div>


  );
}

export default App;
