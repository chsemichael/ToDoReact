import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../../Contexts/AuthContext";
import { Container, Row, Col, ListGroup, Card, Button, Modal } from "react-bootstrap";
import "./Todos.css";
import SingleToDo from "./SingleToDo";
import FilterToDos from "./FilterToDo";
import ToDoCreate from "./ToDoCreate";

export default function Todos() {
  const [todos, setTodos] = useState([]);

  const { currentUser } = useAuth();
  const [todoFilter, setToDoFilter] = useState(-1);

  const [showCreate, setShowCreate] = useState(false)
  const [showDelete, setShowDelete] = useState(false)
  const [deletingTodoId, setDeletingTodoId] = useState('')

  // const setNewTodos (newTodos) => {
  //   setTodos(newTodos);
  // }

  const getTodos = (newTodos = '') => {
    if(!newTodos) {
      setTodos(todos)
    }
    else {
      setTodos(newTodos)
    }
    
    // axios
    //   .get(`http://resourceapi.spencerwpearson.com/api/Resources`)
    //   .then((response) => {
    //     setResources(response.data);
    //  });
  };

  const deleteTodo = () => {
    getTodos(todos.filter(td => td.todoId !== deletingTodoId))
  }

  useEffect(() => {
    getTodos([
      {
        todoId: 1,
        todoName: "todo 1",
        todoDescription: "todo 1 desc"
      },
      {
        todoId: 2,
        todoName: "todo 2",
        todoDescription: "todo 2 desc"
      },
      {
        todoId: 3,
        todoName: "todo 3",
        todoDescription: "todo 3 desc"
      }
    ]);
  }, []);

  const retireveDeletingTodoName = () => {
    const filteredtodos = todos.filter(td => td.todoId === deletingTodoId)
    return filteredtodos.length > 0 ? filteredtodos[0].todoName : "ERROR, No Category Found"
  }
  return (
    <>
      {currentUser.email === import.meta.env.VITE_ADMIN_EMAIL && (
        <div className="bg-dark p-2 mb-3 text-center create-button">
          {showCreate ? (
            <>
              <button
                onClick={() => setShowCreate(false)}
                className="btn btn-warning"
              >
                Cancel
              </button>
              <ToDoCreate
                getTodos={getTodos}
                setShowCreate={setShowCreate}
                todos={todos}
                setTodos={setTodos}
              />
            </>
          ) : (
            <button
              className="btn btn-info"
              onClick={() => setShowCreate(true)}
            >
              Create To-Do
            </button>
          )}
        </div>
      )}

      <Container id="categories-container">
        <ListGroup>
          <ListGroup.Item className="d-flex justify-content-around bg-primary text-white">
            <div className="category-item center">To-Do Task</div>
            <div className="category-item center">To-Do Description</div>
          </ListGroup.Item>
          {console.log(todos)}
          {todos.map((todo) => (
            <SingleToDo key={todo.todoId} todo={todo} todos={todos} getTodos={getTodos} setDeletingTodoId={setDeletingTodoId} setShowDelete={setShowDelete}/>
          ))}
        </ListGroup>
      </Container>

          {/* Delete Category Confirmation Modal  */}
      <Modal
        show={showDelete}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Confirm Deleting Todo: {retireveDeletingTodoName()}
          </Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button className="btn btn-danger" onClick={() => {
            setShowDelete(false)
            deleteTodo()
          }}>DELETE</Button>
          <Button className="btn btn-primary" onClick={() => {
            setShowDelete(false)
            setDeletingTodoId('')
          }}>Cancel</Button>
        </Modal.Footer>
      </Modal>
      
    </>
    
  );
}
