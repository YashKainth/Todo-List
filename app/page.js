"use client";
import React from "react";
import { useState } from "react";

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [tasks, settasks] = useState([]);

  const submithandler = (e) => {
    e.preventDefault();
    settasks([...tasks, { title, desc, completed: false }]);
    settitle("");
    setdesc("");
    console.log(tasks.length);
  };

  const taskdelete = (i) => {
    let copytask = [...tasks];
    copytask.splice(i, 1);
    settasks(copytask);
  };

  const taskcomplete = (i) => {
    let copyTasks = [...tasks];
    copyTasks[i] = { ...copyTasks[i], completed: true };
    settasks(copyTasks);
  };

  let updateTask = <h5>Task list&nbsp;:&nbsp;All clear!</h5>;

  if (tasks.length > 0) {
    updateTask = tasks.map((t, i) => {
      return (
        <li
          key={i}
          className="main-tasks list-none flex flex-row items-center justify-between w-full mb-8"
        >
          <div className="task-container flex flex-row items-center gap- justify-between basis-8/12">
            <h5
              style={{
                color: t.completed ? "#9ca3af" : "#fff",
                textDecoration: t.completed ? "line-through" : "none",
              }}
            >
              {t.title}
            </h5>
            <p
              style={{
                color: t.completed ? "#9ca3af" : "#fff",
                textDecoration: t.completed ? "line-through" : "none",
              }}
            >
              {t.desc}
            </p>
          </div>
          <div className="edit">
            <button
              onClick={() => {
                taskcomplete(i);
              }}
              className="complete text-l font-extralight text-white bg-green-800 px-4 py-2 rounded-full"
            >
              Complete
            </button>
            <button
              onClick={() => {
                taskdelete(i);
              }}
              className="delete text-l font-extralight text-white bg-red-800 px-4 py-2 rounded-full"
            >
              Delete
            </button>
          </div>
        </li>
      );
    });
  }

  return (
    <>
      <h1>Checkmate :&nbsp; Your Daily Tasks</h1>
      <form className="mainform" onSubmit={submithandler}>
        <input
          type="text"
          className="title"
          placeholder="Enter Title"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />
        <input
          type="text"
          className="desc"
          placeholder="Enter Description"
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value);
          }}
        />
        <button type="submit" className="add-task">
          Add Task
        </button>
      </form>
      <div className="tasks">{updateTask}</div>
    </>
  );
};

export default page;
