import React, { useState } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizzas, setPizzas] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    size: "",
    vegetarian: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
  function handleSubmit (event) {
    event.preventDefault ()
     
  }

    return (
    <>
      <Header />
      <PizzaForm formData={formData} handleChange={handleChange} handleSubmit= {handleSubmit} />
      <PizzaList pizzas={pizzas} />
    </>
  );
}

export default App;
