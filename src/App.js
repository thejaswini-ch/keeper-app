import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import {Footer} from "./Components/Footer";
import {Todos} from "./Components/Todos";
import {AddTodo} from "./Components/AddTodo";
import React, { useState } from 'react';
function App() {
  const onDelete=(todo)=>{
    console.log("I'm ondelete of todo",todo);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
  }
  const addTodo=(title,desc)=> {
      console.log("I'm adding this todo",title,desc);
  }
  const [todos, setTodos]=useState([
    {
      sno: 1,
      title: "Go to Temple",
      desc: "You have to go to the temple"
    },
    {
      sno: 2,
      title: "Go to Market",
      desc: "You have to go to the market"
    },
    {
      sno: 3,
      title: "Go to Mall",
      desc: "You have to go to the mall"
    }
  ])

  return (
    <>
      <Header title="My Todos List" searchBar={false}/>
      <AddTodo addTodo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>
    </>
  );
}

export default App;
