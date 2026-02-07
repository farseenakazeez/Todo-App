import { apiSlice } from "./apiSlice.js";
const todoApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) =>({
        getTodos : builder.query({
            query:() =>({
                url : 'api/todo'

            }),
        }),


        addTodo : builder.mutation({
            query:(data)=>({
                url: 'api.todo/create',
                method:'post',
                body:data,
            }),
        }),
    }),
});
export const{
    useAddTodoMutation,
    useGetTodosQuery
    
}=todoApiSlice