import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  let [para,setPara]=useState("");
  let addPara=()=>{
    setPara("Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy");
  }
  return (
    <div id="main">
      <p id="para">{para}</p>
      <button id="click" onClick={addPara}>click</button>
    </div>
  );
}


export default App;
