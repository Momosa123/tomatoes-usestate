import React, {useState} from "react"
import './App.css';

function App() {
  const [tomatoes, setTomatoes] = useState(0)
  let emoji = ""
  for (let i = 0; i < tomatoes; i++){
    emoji += "🍅"
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
        <div className="tomato-box">
          <h1>{emoji}</h1>
        </div>
          <div className="buttons-container">
            <button className="button" onClick={()=>setTomatoes(tomatoe=>tomatoe+1)}>
                Add 
            </button>
            <button className="button" onClick={()=>setPositiveTomatoe()}>
                Remove 
              </button>
          </div>
        
      </div>
    </div>
  );
}

export default App;
