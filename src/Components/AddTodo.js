import React, { useState } from 'react';
export const AddTodo = ({addTodo}) => {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const submit=(e)=> {
        e.preventDefault();
        if(!title||!desc)
            alert("Todo or Description cannot be empty");
        addTodo(title,desc);
    }
  return (
    <div className="container">
      <form onSubmit={submit}>
        <div class="mb-3">
            <h3>Add a Todo</h3>
          <label for="title" class="form-label">
            Todo
          </label>
          <input
            type="text"
            class="form-control"
            id="title"
            aria-describedby="emailHelp"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
          />
        </div>
        <div class="mb-3">
          <label for="desc" class="form-label">
            Description
          </label>
          <input
            type="text"
            class="form-control"
            id="desc"
            value={desc}
            onChange={(e)=>setDesc(e.target.value)}
          />
        </div>
        <button type="submit" class="btn btn-sm btn-success btn-primary">
          Add Todo
        </button>
      </form>
    </div>
  );
};
