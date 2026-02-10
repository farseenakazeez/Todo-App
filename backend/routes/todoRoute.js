import express from 'express'
import  { getTodos, deleteTodos,createTodos, getTodoById, updateTodo } from '../controllers/todocontroller.js'
const todoRoute = express.Router()
todoRoute.get('/',getTodos)
todoRoute.post('/create',createTodos)
todoRoute.delete('/:id',deleteTodos)
todoRoute.get('/getTodoById',getTodoById)
todoRoute.patch('/updateTodo',updateTodo)
export default todoRoute;

// http://localhost:3000/api/todo


// http://localhost:3000/api/todo/create


// http://localhost:3000/api/todo/:key



// http://localhost:3000/api/todo/getTodoById




