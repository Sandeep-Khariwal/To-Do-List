import React,{useState} from 'react';
import './App.scss';
import ShowList from './component/ShowList';
import "./component/showList.scss";

function App() {

  const [task,setTask] = useState("");
  const [todoList , settodoList] = useState([]);

// onChangeHandler call here
  const onchangeHandler=(event)=>{
   setTask(event.target.value);
  }

// onClick submitHandler call here
  const submitHandler =(event)=>{
   if(task !==""){ 
   settodoList([...todoList,task]);
   }
   else{
    alert("Please Add a List")
   }
   event.preventDefault();
    setTask("");
  }


  // code for delete list
  const deleteHandler = (id) =>{
    const afterDelete = todoList.filter((curr,index)=>{
      return index !== id;
    })
    settodoList(afterDelete);
  }
  return (
    <div className="App">
      <div>
        <h1>To Do List</h1>
        <form onSubmit={submitHandler}>
          <input type="text" name='input' placeholder='Add your task...' value={task}  onChange={onchangeHandler} ></input>
          <button type='submit' >{"Add"}</button>
        </form>
        {
          todoList.map((value,index)=>{
            return <ShowList key={index}
            id={index}
            listname={value}
            delete={deleteHandler}
            />
          })
        }
      </div>
    </div>
  );
}

export default App;
