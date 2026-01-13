import express from 'express'
import  { getTodos, deleteTodos,createTodos, getTodoById } from '../controllers/todocontroller.js'
const todoRoute = express.Router()
todoRoute.get('/',getTodos)
todoRoute.post('/create',createTodos)
todoRoute.delete('/:id',deleteTodos)
todoRoute.get('/getTodoById',getTodoById)
export default todoRoute;