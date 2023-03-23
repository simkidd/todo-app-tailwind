import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";
import UpdateTodo from "../components/UpdateTodo";
import { HiHome } from "react-icons/hi";
import { MdOutlineArrowBackIos } from "react-icons/md";

const Todos = () => {
  const [todos, setTodos] = useState(() => {
    // restore saved todos using lazy initial state
    const savedTodos = localStorage.getItem("myTodos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      //initial state
      return [];
    }
  });
  const [newTodo, setNewTodo] = useState("");
  const [updateTodo, setUpdateTodo] = useState("");

  useEffect(() => {
    localStorage.setItem("myTodos", JSON.stringify(todos));
  }, [todos]);

  // add task
  const addTodo = () => {
    if (newTodo) {
      const num = todos.length + 1;
      const newEntry = {
        id: num,
        title: newTodo,
        isDone: false,
        createdAt: new Date().toUTCString(),
      };
      setTodos([...todos, newEntry]);
      // clear out the input field after add
      setNewTodo("");
    }
  };

  // handle form onSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo();
  };

  // handle input onChange
  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  // mark task as completed
  const markCompleted = (id) => {
    const filterDone = todos.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          isDone: !task.isDone,
        };
      }
      return task;
    });
    setTodos(filterDone);
  };

  // delete task
  const deleteTask = (id) => {
    const filterTasks = todos.filter((task) => task.id !== id);
    setTodos(filterTasks);
  };

  // edit task for update
  const changeTask = (e) => {
    const newEntry = {
      id: updateTodo.id,
      title: e.target.value,
      isDone: updateTodo.isDone ? true : false,
      createdAt: new Date().toUTCString(),
    };
    setUpdateTodo(newEntry);
  };

  // update task
  const updateTask = () => {
    const filterRecords = [...todos].filter(
      (task) => task.id !== updateTodo.id
    );
    const updatedItem = [...filterRecords, updateTodo];
    setTodos(updatedItem);
    setUpdateTodo("");
  };

  // for cancel update
  const cancelUpdate = () => {
    setUpdateTodo("");
  };

  const handleDeleteAll = () => {
    setTodos([]);
  };

  // delete completed task
  const handleFilter = () => {
    const removeDone = todos.filter((task) => {
      return !task.isDone;
    });
    setTodos(removeDone);
  };

  return (
    <div className="todo-bg w-full h-screen">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="flex items-center w-full md:mb-8 mb-4 pl-4 md:pl-8">
          <Link to="/" className="flex items-center gap-1 text-white">
            <MdOutlineArrowBackIos size={24} /> <HiHome size={24} />
          </Link>
        </div>
        <div className="container mx-auto max-w-[800px] md:h-[85vh] h-[90vh] flex flex-col items-center p-4 shadow-sm bg-white box-border">
          <div className="flex flex-col justify-between w-full h-full">
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold">Task List</h2>
            {updateTodo && updateTodo ? (
              <UpdateTodo
                changeTask={changeTask}
                updateTask={updateTask}
                updateTodo={updateTodo}
                cancelUpdate={cancelUpdate}
              />
            ) : (
              <AddTodo
                newTodo={newTodo}
                addTodo={addTodo}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
              />
            )}
            {todos && todos.length ? "" : <h2> No task found...</h2>}

            <ul className="w-full h-[60vh] overflow-y-scroll">
              <TodoList
                todos={todos}
                deleteTask={deleteTask}
                setUpdateTodo={setUpdateTodo}
                markCompleted={markCompleted}
              />
            </ul>

          </div>
            <div className="flex gap-8">
              <button
                onClick={() => handleDeleteAll(todos)}
                className="flex items-center py-3 px-6 bg-purple-500 text-white"
              >
                Clear List
              </button>
              <button
                onClick={() => handleFilter(todos)}
                className="flex items-center py-3 px-6 bg-purple-500 text-white"
              >
                Clear Completed
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todos;
