import React,{useState} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [state, setState] = useState([]);
  return (
    <div className="container">
      <div className="toDoContainer">
<div className="toDoHeader">
  <h1>Hello ToDoList</h1>
  <div style={{display:'flex'}}>
  <input value={state} onChange={ (e) => setState(e.target.value)} className="form-control" type="text" ></input>
  <button onClick={(e)=> {
    console.log(state);
  }} type="button" className="btn btn-primary">Add  
  </button>
  </div>
  
  {/* <i class="bi bi-x-lg"></i> */}

</div>
</div>
    </div>

);
}

export default App;
