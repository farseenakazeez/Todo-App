import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Backendinstance from '../axios'

function HomePage() {
    const Navigate = useNavigate()
    const [todos, setTodos] = useState([]);
    let [title, settitle] = useState("");
    let [description, setDescription] = useState("");

    const getTodos = async () => {
        try {
            let res = await Backendinstance.get()
            setTodos(res.data)
        }
        catch (error) {
            console.log(error?.message || error?.data?.message);

        }
    };

    const addTodoHandler = async (e) => {
        e.preventDefault()
        try {
            let res = await Backendinstance.post("/create", { title, description });
            getTodos()
            settitle("")
            setDescription("")
        } catch (error) {
            console.log(error?.message || error?.data?.message);

        }
    };
    useEffect(() => {
        getTodos()
    }, []);
    //console.log(todos)

    return (
        <div>
            {todos?.map((todo, index) => (

                <div key={index}>
                    <h1>{todo.title}</h1>
                    <p>{todo.description}</p>
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
