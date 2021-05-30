import React, {useState} from 'react'
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
   const [toDo, setToDo] = useState([]);
   const [toDos, setToDos] = useState('');
  return (
<div className="container m-5 p-2 rounded mx-auto bg-light shadow">
   
    <div className="row m-1 p-4">
        <div className="col">
            <div className="p-1 h1 text-primary text-center mx-auto display-inline-block">
                <i className="fa fa-check bg-primary text-white rounded p-2"></i>
                <u>My Todo-s</u>
            </div>
        </div>
    </div>
   
    <div className="row m-1 p-3">
        <div className="col col-11 mx-auto">
            <div className="row bg-white rounded shadow-sm p-2 add-todo-wrapper align-items-center justify-content-center">
                <div className="col">
                    <input value={toDo} onChange={ (e) => setToDo(e.target.value)} className="form-control form-control-lg border-0 add-todo-input bg-transparent rounded" type="text" placeholder="Add new .."/>
                </div>
              
                <div className="col-auto px-0 mx-0 mr-2">
                    <button type="button" className="btn btn-primary">Add</button>
                </div>
            </div>
        </div>
    </div>
    <div className="p-2 mx-4 border-black-25 border-bottom"></div>

    <div className="row mx-1 px-5 pb-3 w-80">
        <div className="col mx-auto">
            <div className="row px-3 align-items-center todo-item rounded">
                <div className="col-auto m-1 p-0 d-flex align-items-center">
                    <h2 className="m-0 p-0">
                        {/* <i className="fa fa-square-o text-primary btn m-0 p-0 d-none" data-toggle="tooltip" data-placement="bottom" title="Mark as complete"></i> */}
                        <i className="fa fa-check-square-o text-primary btn m-0 p-0" data-toggle="tooltip" data-placement="bottom" title="Mark as todo"></i>
                    </h2>
                </div>
                <div className="col px-1 m-1 d-flex align-items-center">
                    {/* <input type="text" className="form-control form-control-lg border-0 edit-todo-input bg-transparent rounded px-3" readonly value="Buy groceries for next week" title="Buy groceries for next week" /> */}
                    <input type="text" className="form-control form-control-lg border-0 edit-todo-input rounded px-3 d-none" value="Buy groceries for next week" />
                </div>
                <div className="col-auto m-1 p-0 px-3 d-none">
                </div>
                <div className="col-auto m-1 p-0 todo-actions">
                    <div className="row d-flex align-items-center justify-content-end">                      
                        <h5 className="m-0 p-0 px-2">
                            <i className="fa fa-trash-o text-danger btn m-0 p-0" data-toggle="tooltip" data-placement="bottom" title="Delete todo"></i>
                        </h5>
                    </div>  
                </div>
            </div>         
          
        </div>
    </div>
</div>
);
}

export default App;
