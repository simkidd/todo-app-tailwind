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
              <li key={i} className="w-full flex flex-col">
                <div>
                  <div className={task.isDone ? "text-red-600" : ""}>
                    <span className="px-2">{i + 1}</span>
                    <Link>
                      <p className="text-[16px] w-full">{task.title}</p>
                    </Link>
                  </div>

                  <div className="flex gap-3">
                    <button className="bg-purple-500 text-white p-3">
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
                        className="bg-purple-500 text-white p-3"
                      >
                        <FaPencilAlt size={24} />
                      </button>
                    )}
                    <button
                      onClick={() => deleteTask(task.id)}
                      className="bg-purple-500 text-white p-3"
                    >
                      <MdDelete size={24} />
                    </button>
                  </div>
                </div>
                <div>
                  <span className="text-[14px] w-full">{task.createdAt}</span>
                </div>
              </li>
            );
          })}
    </>
  );
};

export default TodoList;
