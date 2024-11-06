import React, { useState, useEffect } from "react";
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
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const storedPizzas = JSON.parse(localStorage.getItem("pizzas"));
    if (storedPizzas) {
      setPizzas(storedPizzas);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("pizzas", JSON.stringify(pizzas));
  }, [pizzas]);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (editIndex !== null) {
      const updatedPizzas = pizzas.map((pizza, index) =>
        index === editIndex ? formData : pizza
      );
      setPizzas(updatedPizzas);
      setEditIndex(null);
    } else {
      setPizzas([...pizzas, formData]);
    }
    setFormData({ name: "", size: "", vegetarian: "" });
  }

  function handleDelete(index) {
    const updatedPizzas = pizzas.filter((_, i) => i !== index);
    setPizzas(updatedPizzas);
  }

  function handleEdit(index) {
    setFormData(pizzas[index]);
    setEditIndex(index);
  }

  return (
    <>
      <Header />
      <PizzaForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <PizzaList
        pizzas={pizzas}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </>
  );
}

export default App;
