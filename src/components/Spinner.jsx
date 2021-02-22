import React from "react";

const Spinner= () => {
    return(
    <div style = {{display : "flex" , justifyContent:"center", alignItems:"center"}} className="spinner-border" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>)
} 

export default Spinner;

