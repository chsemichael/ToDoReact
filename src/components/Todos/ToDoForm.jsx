import { Formik, Form, Field } from 'formik'
import { todoSchema } from '../../utilities/validationSchema'
import axios from 'axios'

export default function ToDoForm({todo = '', setShowCreate, setShowEdit, getTodos, todos, setTodos}) {

    const {todoId, todoName, todoDescription} = todo || ''


    const handleSubmit = values => {
        console.log(values)

        // Creating new category
        if(!todo) {
            // axios.post(`http://resourceapi.spencerwpearson.com/api/Categories`, values).then(() => { //Ask about link to API?
            //     setShowCreate(false)
            //     getTodos()
            // })
            const newToDo = {
                todoId: (Math.random() * (999999999 - 0) + 0),
                todoName: values.todoName,
                todoDescription: values.todoDescription
            }
            var newTodosList = todos.filter(() => true)
            newTodosList.push(newToDo)
            
            getTodos(newTodosList)

            setShowCreate(false)
        }
        // Editing category
        else {
           
            var matchedTodos = todos.filter(td => td.todoId === todoId)

            if(matchedTodos[0].todoName !== values.todoName)
                matchedTodos[0].todoName = values.todoName
            if(matchedTodos[0].todoDescription !== values.todoDescription)
                matchedTodos[0].todoDescription = values.todoDescription

            var fitleredTodos = todos.filter(td => td.todoId !== todo.todoId)
            fitleredTodos.push(matchedTodos[0])

            getTodos(fitleredTodos)

            setShowEdit(false)
            

            // axios.put(`http://resourceapi.spencerwpearson.com/api/Categories/${todoId}`, editingTodo).then(() => { //Ask about link to API?
            //     setShowEdit(false)
            //     getTodos()
            // })
            
        }
    }


  return (
    <div className="createCategory m-2 text-white text-center">
        <Formik
            initialValues={{
                //Below is a ternary operator that makes our form behave differently based on whether we have a prop called  (ie Editing a category)
                todoName: todo ? todoName : '',
                todoDescription: todo ? todoDescription : ''
            }}
            validationSchema={todoSchema}
            onSubmit={values => handleSubmit(values)}
        >
                {({errors, touched}) => (
                    //Form will go here
                    <Form id="catForm" className="row text-center m-auto">
                        <div className="form-group m-1 p-1">
                            <Field name="todoName" className="form-control" placeholder="Name" />
                            {errors.todoName && touched.todoName ? 
                                <div className="text-danger">{errors.todoName}</div>
                            : null}
                        </div>
                        <div className="form-group m-1 p-1">
                            <Field name="todoDescription" className="form-control" placeholder="Description" />
                            {errors.todoDescription && touched.todoDescription ? 
                                <div className="text-danger">{errors.todoDescription}</div>
                            : null}
                        </div>
                        <div className="form-group m-1">
                            <button type="submit" className="btn btn-success">Submit To-Do Item</button>
                        </div>
                    </Form>
                )}
        </Formik>
    </div>
  )
}