import React from "react";

function PizzaForm({ formData, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="name"
            placeholder="Pizza Name"
            onChange={handleChange}
            value={formData.name}
            required
          />
        </div>
        <div className="col">
          <select className="form-control" name="size" onChange={handleChange} value={formData.size} required>
          
            <option value=""disabled hidden>Choose Size</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              onChange={handleChange}
              required
              checked={formData.vegetarian === "Vegetarian"}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              onChange={handleChange}
              checked={formData.vegetarian === "Not Vegetarian"}
              required
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            {formData.name ? "Update" : "Add"} Pizza
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
