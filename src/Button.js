import React from "react";

export default function Button ({setTomatoes, setPositiveTomatoe}){
  return(
    <div className="buttons-container">
            <button className="button" onClick={()=>setTomatoes(tomatoe=>tomatoe+1)}>
                Add 
            </button>
            <button className="button" onClick={()=>setPositiveTomatoe()}>
                Remove 
              </button>
          </div>
  )
}