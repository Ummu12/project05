import React from "react";



export const Watch=({title, category, desc, price})=>{
   return(
    <div className="child">
        <h2>{title}</h2>
          <h3>{category}</h3>
          <h2>{price}</h2>
          <p>{desc}</p>

      
    </div>

   )

}