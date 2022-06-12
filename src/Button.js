import React from "react";

export default function Button ({addTomatoes, removeTomatoes}){
  return(
    <div className="buttons-container">
            <button className="button" onClick={addTomatoes}>
                Add 
            </button>
            <button className="button" onClick={removeTomatoes}>
                Remove 
              </button>
          </div>
  )
}