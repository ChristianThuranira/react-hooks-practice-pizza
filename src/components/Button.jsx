import React from "react";

function Button({ onEdit, onDelete }) {
  return (
    <div>
      <button className="btn btn-primary" onClick={onEdit}>
        Edit
      </button>
      <button className="btn btn-danger" onClick={onDelete}>
        Delete
      </button>
    </div>
  );
}

export default Button;
