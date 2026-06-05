import express from 'express'
import {
    getTodos,
    deleteTodos,
    createTodos,
    getTodoById,
    updateTodo
} from '../controllers/todocontroller.js'
import { protect } from '../middlewares/authMiddlewares.js'



const todoRoute = express.Router()

todoRoute.get('/', protect, getTodos)
todoRoute.post('/create', protect, createTodos)
todoRoute.delete('/:id', protect, deleteTodos)
todoRoute.get('/getTodoById', protect, getTodoById)
todoRoute.patch('/updateTodo', protect, updateTodo)
export default todoRoute;

// http://localhost:3000/api/todo


// http://localhost:3000/api/todo/create


// http://localhost:3000/api/todo/:key



// http://localhost:3000/api/todo/getTodoById




