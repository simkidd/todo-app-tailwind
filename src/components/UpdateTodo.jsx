import React from 'react';
import { MdCancel, MdEditSquare } from 'react-icons/md';

const UpdateTodo = ({changeTask, updateTask, updateTodo, cancelUpdate}) => {
  return (
    <>
        <div  className='w-full flex items-center'>
            <div className='flex w-full border border-purple-300'>
                <input type="text" value={updateTodo && updateTodo.title} onChange={changeTask} className='w-full focus:!outline-purple-500 px-' />

                <button type='submit' onClick={updateTask} className="flex items-center justify-center p-3 bg-purple-500 text-white border border-purple-500 border-r-white"><MdEditSquare size={24}/></button>

                <button onClick={cancelUpdate} className="flex items-center justify-center p-3  bg-purple-500 text-white border border-purple-500"><MdCancel size={24}/></button>
           
            </div>
           
        </div>
    </>
  )
}

export default UpdateTodo