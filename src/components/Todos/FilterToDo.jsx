import { useState, useEffect } from "react";
import axios from "axios";

export default function FilterToDos({setToDosFilter, todos}) {
  return (
    <div className="text-center mt-5">
      <button
        onClick={() => setToDosFilter(-1)}
        className="btn btn-outline-info bg-dark m-1"
      >
        All
      </button>
      {/* Below we map all of the categories to a button that will be used to filter resources on that category */}
      {todos.map(todos => (
        <button
          key={todos.todoId}
          className="btn btn-outline-info bg-dark m-1"
          onClick={() => setResourceFilter(Number(todos.todoId))}
        >
          {todos.todoName}
        </button>
      ))}
    </div>
  );
}