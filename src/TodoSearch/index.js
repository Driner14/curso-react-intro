import React from "react";

function TodoSearch({
    serchValue,
    setserchValue
}) {

  return (
    <input
      placeholder="Cortar cebolla"
      value={serchValue}
      onChange={(event) =>{
        setserchValue(event.target.value)
      }
        
      }
    ></input>
  );
}

export { TodoSearch };
