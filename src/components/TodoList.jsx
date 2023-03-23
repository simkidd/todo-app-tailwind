import React from "react";
import { FaPencilAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { AiFillCheckCircle } from "react-icons/ai";

const TodoList = ({ todos, deleteTask, setUpdateTodo, markCompleted }) => {
  return (
    <>
      {/* sort and map the todos */}
      {todos &&
        todos
          .sort((a, b) => (a.id > b.id ? 1 : -1))
          .map((task, i) => {
            return (
              <div key={i} className="w-full flex flex-col px-2">
                <div className="flex items-start justify-between w-full">
                  <div
                    className={
                      task.isDone
                        ? "text-red-600 flex md:w-[70%] w-[50%] items-start gap-2 box-border"
                        : "flex md:w-[70%] w-[50%] items-start gap-2 box-border"
                    }
                  >
                    <div>
                      <span className="px-2">{i + 1}</span>
                    </div>
                    <div className="w-[100%] break-words">
                      <Link className="flex-wrap hover:underline">
                        <p className="text-[16px] ">{task.title}</p>
                      </Link>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button className="bg-green-500 text-white p-3">
                      <AiFillCheckCircle
                        size={24}
                        onClick={() => markCompleted(task.id)}
                      />
                    </button>
                    {task.isDone ? null : (
                      <button
                        onClick={() =>
                          setUpdateTodo({
                            id: task.id,
                            title: task.title,
                            isDone: task.isDone ? true : false,
                          })
                        }
                        className="bg-yellow-500 text-white p-3"
                      >
                        <FaPencilAlt size={24} />
                      </button>
                    )}
                    <button
                      onClick={() => deleteTask(task.id)}
                      className="bg-red-500 text-white p-3"
                    >
                      <MdDelete size={24} />
                    </button>
                  </div>
                </div>
                <div>
                  <span
                    className={
                      task.isDone
                        ? "text-red-600 text-[14px] w-full ml-8"
                        : "text-[14px] text-gray-500 w-full ml-8"
                    }
                  >
                    {task.createdAt}
                  </span>
                </div>
              </div>
            );
          })}
    </>
  );
};

export default TodoList;
