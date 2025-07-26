import React from 'react'
import { useContext } from 'react'

export const TodoContext = React.createContext({
    todos:{
        id:1,
        todo:"First todo",
        completed:false
    },
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    todoCompleted:(id)=>{}
})

export const TodoProvider= TodoContext.Provider

export const useTodo=()=>{
    return useContext(TodoContext)
}