import Todos from  "../models/todomodel.js";

const getTodos = async(req,res)=>{
    let todos = await Todos.find()
    res.send(todos)
};


const createTodos = async(req,res)=>{
    //console.log(req.body)
    let{title,description} = req.body
    let todo = await Todos.create({
        title,
        description
    }) 
    res.send(todo)
    
};
const deleteTodos = async(req,res)=>{
 const deleted = await Todos.findByIdAndDelete(req.params.id)
 if(!deleted){
    return res.status(404).json({message : 'Todo not found'})
 }
 res.json({message : 'Todo deleted'})
}

const getTodoById = async(req,res) => {
    console.log(req.query)
    const {id} = req.query;
    const todo = await Todos.findById(id);

    if(!todo){
    return res.status(404).json({message : 'Todo not found'})
 }
 res.json(todo);
};

const updateTodo = async (req, res) => {
  let { title, description, isCompleted, id } = req.body;

  let update = await Todos.findByIdAndUpdate(id, {
    title,
    description,
    isCompleted,
  });

  res.json({ message: "Todo Update", update });
};

export{
    getTodos,
    createTodos,
    deleteTodos,
    getTodoById,
    updateTodo
};