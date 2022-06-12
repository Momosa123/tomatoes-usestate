import React, {useState} from "react"
import './App.css';
import Button from "./Button";
import Tomatoe from "./Tomatoe";

function App() {
  const [tomatoes, setTomatoes] = useState(0)
  let tomatoemoji = ""
  for (let i = 0; i < tomatoes; i++){
    tomatoemoji += "🍅"
  }
  function setPositiveTomatoe(){
    if(tomatoes >0){
      setTomatoes(tomatoe=>tomatoe-1)
    }
  }
  return (
    <div className="App">
      <div className="window">
      <h2>Tomato Counter</h2>
      <Tomatoe tomatoemoji={tomatoemoji}/>
       <Button setPositiveTomatoe={setPositiveTomatoe} setTomatoes={setTomatoes}/>   
        
      </div>
    </div>
  );
}

export default App;
