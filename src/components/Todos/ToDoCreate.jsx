import ToDoForm from "./ToDoForm"

export default function ToDoCreate({getTodos, setShowCreate, todos, setTodos}) {
  return (
    <div className="createCategory m-2 text-center">
        <ToDoForm
            getTodos={getTodos}
            setShowCreate={setShowCreate}
            todos={todos}
            setTodos={setTodos} />
    </div>
  )
}