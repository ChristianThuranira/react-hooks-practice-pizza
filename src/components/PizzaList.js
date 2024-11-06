import React from "react";
import Button from "./Button";

function PizzaList({ pizzas, handleDelete, handleEdit }) {
  const displayData = pizzas.map((data, index) => {
    return (
      <tr key={index}>
        <td>{data.name}</td>
        <td>{data.size}</td>
        <td>{data.vegetarian}</td>
        <td>
          {/* Pass the edit and delete handlers to each button */}
          <Button onEdit={() => handleEdit(index)} onDelete={() => handleDelete(index)} />
        </td>
      </tr>
    );
  });

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
      <tbody>{displayData}</tbody>
    </table>
  );
}

export default PizzaList;
