import React from "react";
import Pizza from "./Pizza";
import Pizzadata from "../Data";
import Button from "./Button";

function PizzaList() {
  const displayData = Pizzadata.map((data, index)=>{
    return <tr key={index}>
     <td>
      {
        data.topping      
      }
     </td>
     <td>
      {
        data.size      
      }
     </td>
     <td>
      {
        data.vegetarian      
      }
     </td>
     <td>
      <Button/>
     </td>
    </tr> 
  })

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        {
          displayData
        }
      </tbody>
    </table>
  );
}

export default PizzaList;
