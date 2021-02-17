import logo from './logo.svg';
import React, { useEffect,useState } from 'react';
import './App.css';
import './style.css';
import style from './custom.module.css';
// import User from './User';

//BASIC HOOKS PROGRAM
// function App() {
//   const [data,setData] =useState("Anshul");
//   return (
//     <div className="App">
//    <h1>{data} !</h1>
//    <button onClick={()=>setData("Manish")}>Update Data</button>
//     </div>
//   );
// }

// export default App;

// LIFE CYCLE METHODS IN FUNCTIONAL COMPOENENTS
function App() {

  const [data,setData] = useState(10);
  const [count,setCount] = useState(100);

  // useEffect(() => {
  //  console.log("useEffect called with data state");
  // },[data]);                                          //yhan pe jo b parameter dalege vhi console me chlega

  // useEffect(() => {
  //   // console.log("useEffect called with count state");
  //   alert(" count is "+count);
  //  },[count]) 

  return (
    <div className="App">
      {/* <h1>useEffect in React {count}</h1> */}
      {/* <h1>Count :: {count}</h1> */}
        {/* <h1>Data :: {data}</h1> */}
      {/* <User count={count} data={data}/>
      <button onClick={()=>setCount(count+1)}>Update Counter</button>
      <button onClick={()=>setData(data+1)}>Update Data</button> */}


      {/* Style in ReactJs */}
      <h1 className="primary">Style type 1 in React JS</h1>     
      {/*Style type 2 k style me phle bracket me jsx code h dusre bracket me object h and camelcases letters use honge */}
      <h1 style={{color:'red',backgroundColor:'black'}}>Style type 2 in React JS</h1> 
      <h1 className={style.success}>Style type 3 in React JS</h1> 
    </div>
  );
}

export default App;
