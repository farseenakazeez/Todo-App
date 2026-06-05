import mongoose from 'mongoose'
const todoschema = mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    isCompleted : {
        type : Boolean,
        default : false
    },
     userId: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
})
const Todos = mongoose.model('todos',todoschema)
export default Todos;