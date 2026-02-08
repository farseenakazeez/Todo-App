import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import {toast} from 'react-toastify'
import { useAddTodoMutation,useDeleteTodoMutation,useGetTodosQuery } from '../slices/todoApiSlice';
import { createDraftSafeSelectorCreator } from '@reduxjs/toolkit';

function HomePage() {
    const Navigate = useNavigate()

    let [title, settitle] = useState("");
    let [description, setDescription] = useState("");

    let {data : todos ,refetch} = useGetTodosQuery();

    let[addTodo] = useAddTodoMutation();
    let[deleteTodo] = useDeleteTodoMutation();


    
    const addTodoHandler = async (e) => {
        e.preventDefault()
        try {
            let res = await addTodo({title,description}).unwrap();
            refetch();
         
            toast.success("Todo Added")
          
            settitle("")
            setDescription("")
        } catch (error) {
            console.log(error?.message || error?.data?.message);
            toast.error(error?.message || error?.data?.message)

        }
    };
    const deleteTodoHandler = async (id)=>{
        try{
            let res=await deleteTodo(id).unwrap();
            refetch();
            toast.success("Account deleted")
        }
         catch (error) {
            console.log(error?.message || error?.data?.message);
            toast.error(error?.message || error?.data?.message)

        }
    }
   
    //console.log(todos)

    return (
        <div>
            {todos?.map((todo, index) => (

                <div key={index}>
                    <h1>{todo.title}</h1>
                    <p>{todo.description}</p>
                    <button onClick={()=>deleteTodoHandler(todo._id)}>Delete</button>
                </div>


            ))};


            <div>
                <form onSubmit={addTodoHandler}>
                    <input type="text" placeholder="Enter title" value={title} onChange={(e) => settitle(e.target.value)}/>
                        <textarea placeholder="Enter description" value={description} onChange={(e) =>
                            setDescription(e.target.value)}
                        ></textarea>
                        <button type="submit">Add </button>
                </form>
            </div>


        </div>




    )
};


export default HomePage
