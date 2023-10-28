import React from "react";
  export default function OptionSelection({ arrayItems}){
    return (
        <>
        <h1 className="heading">React AI APP</h1>
        <div classNmae="grid-main">
          {arrayItems.map((items) => {
            return {
            <h3>{item.name}</h3>
            <p>{item.description}</p>
           </div>
          };
          )}
        </div>
        </>
    );
  }