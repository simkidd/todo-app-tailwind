import React from "react";
import { MdAddCircle } from "react-icons/md";

const AddTodo = ({ newTodo, addTodo, handleInputChange, handleSubmit }) => {
  return (
    <>
      <form onSubmit={handleSubmit} className="w-full flex items-center">
        <div className="flex w-full border border-purple-300">
          <input
            type="text"
            value={newTodo}
            onChange={handleInputChange}
            className="w-full focus:!outline-purple-500 px-3"
          />
          <button
            type="submit"
            className="flex items-center justify-center p-3  bg-purple-500 text-white border border-purple-500"
          >
            <MdAddCircle size={24} />
          </button>
        </div>
      </form>
    </>
  );
};

export default AddTodo;
