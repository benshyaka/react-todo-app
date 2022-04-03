import React, { useState } from "react";

function Form(props) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');


  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim()) {
      return;
    } else if(!description.trim()){
      return;
    }
    props.addTask(name, description);
    setName("");
    setDescription("");
  }


  function handleChange(e) {
    setName(e.target.value);
  }

  function handledescription(d) {
    setDescription(d.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
          My Todos
      </h2>
      <div className="formdiv">
        <div className="inputform">
          <label for="" className="label-wrapper">
            Name
          </label>
          <input
            type="text"
            id="new-todo-input"
            className="input input__lg"
            name="text"
            autoComplete="off"
            value={name}
            onChange={handleChange}
          />
        </div>
          
        <div className="inputform">
          <label for="" className="label-wrapper">
            Descripion
          </label>
          <input
            type="text"
            id="new-todo-input"
            className="input input__lg"
            name="text"
            autoComplete="off"
            value={description}
            onChange={handledescription}
          />
        </div>
        <div className="btn-group">
        <button type="submit" className="btn btn__primary">
        Add ToDo
      </button>
        </div>
        
      </div>

     
    </form>
  );
}

export default Form;
