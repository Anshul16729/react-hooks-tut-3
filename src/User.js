import logo from './logo.svg';
import React, { useEffect,useState } from 'react';
import './App.css';

function User(props) {

  useEffect(() => {
   alert("Count is " + props.count);
  },[props.count]);  
  
  useEffect(() => {
    alert("Data is " + props.data);
   },[props.data])

  return (
    <div className="App">
      <h1>Count Props :: {props.count}</h1>
      <h1>Data Props :: {props.data}</h1>

      
    </div>
  );
}

export default User;
