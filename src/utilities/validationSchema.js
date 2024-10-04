import * as Yup from 'Yup'

const todoSchema = Yup.object().shape({
    //Below we call to each property that will need to be validated and use Yup to define the requirements for each property (required, maxLength, etc.)
    todoName: Yup.string().max(25, 'Max 25 characters').required('Required'),
    todoDescription: Yup.string().max(50, 'Max 50 chatacters')
})

export { todoSchema }