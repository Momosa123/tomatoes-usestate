import React, {useState, useRef} from "react"
import './App.css';
import Button from "./Button";
import Tomatoe from "./Tomatoe";

function App() {
  const days = ["M", "T", "W", "Th", "F", "Sa", "Su"];
  const [selectedDay, setSelectedDay] = useState("")
  const [allTomatoes, setAllTomatoes] = useState({})
  const boldStyling = {color:"blue"}

  function addTomatoes (){
    const newAllTomatoes = {...allTomatoes}
    const currentDayTomatoes = newAllTomatoes[selectedDay]
    if(currentDayTomatoes){
      newAllTomatoes[selectedDay] = currentDayTomatoes + '🍅'
    }else{
      newAllTomatoes[selectedDay] = '🍅'
    }
   setAllTomatoes(newAllTomatoes)
}

function removeTomatoes (){
  const newAllTomatoes = {...allTomatoes}
  const currentDayTomatoes = newAllTomatoes[selectedDay]
  if(currentDayTomatoes){
    
    newAllTomatoes[selectedDay] = currentDayTomatoes.slice(1,-2) 
  }
 setAllTomatoes(newAllTomatoes)
}

  const tomatoePerDay = days.map((day) => (
    <div key={day} className="tomato-box">
      <h3 onClick={()=>setSelectedDay(day)} style={selectedDay === day ? boldStyling : {}} >{day}</h3>
      {console.log(selectedDay, allTomatoes)}
      <Tomatoe 
      className="tomato-day-box"
      tomatoemoji={allTomatoes[day]}
      />
    </div>
  ))

 
  return (
    <div className="App">
      <div className="window">
      
      <h2>Tomato Counter</h2>
      {tomatoePerDay}
      
       <Button addTomatoes={addTomatoes} removeTomatoes={removeTomatoes}/>   
        
      </div>
    </div>
  );
}

export default App;
