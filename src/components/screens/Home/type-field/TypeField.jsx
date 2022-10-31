import React, { useState } from 'react'

const TypeField = ({ setTodos }) => {
    const [title, setTitle] = useState('')

    const addTodo = (title) => {
        setTodos(prev => [
            {
            _id: new Date(),
            title,
            isCompleted: false,
        }, ...prev,])
        setTitle('')
      }

    return (
        <div className='flex items-center justify-between mb-4 rounded-2xl bg-slate-800 p-5 w-full border-2 border-slate-600 px-5 py-4'>
            <input 
            type="text" 
            placeholder='Type in your ToDo and press enter' 
            onChange={e => setTitle(e.target.value)} value={title}
            onKeyPress={e => e.key ==='Enter' && addTodo(title)}
            className='bg-transparent w-full border-none outline-none' />
        </div>
    )
}

export default TypeField