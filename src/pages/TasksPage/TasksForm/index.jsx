import React, { useEffect, useState } from 'react';

const TasksForm = ({ setTasks, selectedTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');
  const [deadline, setDeadline] = useState('');

  useEffect(() => {
    if (selectedTask) {
      setTitle(selectedTask.title || '');
      setDescription(selectedTask.description || '');
      setStatus(selectedTask.status || '');
      setDeadline(selectedTask.deadline || '');
    }
  }, [selectedTask]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { title, description, status, deadline } = e.target;

    setTasks((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        title: title.value,
        description: description.value,
        status: status.value,
        deadline: deadline.value,
      },
    ]);

    setTitle('');
    setDescription('');
    setStatus('');
    setDeadline('');
  };

  return (
    <form
      className="bg-stone-900 max-w-md m-auto p-6 mt-6 rounded shadow-xl/40"
      onSubmit={handleSubmit}
    >
      <h1 className="flex justify-center items-center text-3xl m-8 text-white">
        Add/Edit Task
      </h1>

      <div className="flex flex-col justify-center items-left">
        <label htmlFor="title" className="text-xl pl-2 text-white">
          Title
        </label>
        <input
          className="bg-stone-300 outline-0 text-stone-700 p-2 m-2 rounded"
          onInput={(e) => setTitle(e.target.value)}
          value={title}
          id="title"
          type="text"
          name="title"
          placeholder="Enter task title..."
        />
      </div>

      <div className="flex flex-col justify-center items-left">
        <label htmlFor="description" className="text-xl pl-2 text-white">
          Description
        </label>
        <textarea
          className="bg-stone-300 outline-0 text-stone-700 p-2 m-2 rounded"
          onInput={(e) => setDescription(e.target.value)}
          value={description}
          id="description"
          name="description"
          placeholder="Enter task description..."
          rows="4"
        />
      </div>

      <div className="flex flex-col justify-center items-left">
        <label htmlFor="status" className="text-xl pl-2 text-white">
          Status
        </label>
        <select
          name="status"
          onChange={(e) => setStatus(e.target.value)}
          value={status}
          className="bg-stone-300 outline-0 text-stone-700 p-2 m-2 rounded"
        >
          <option value="">Select Status</option>
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      <div className="flex flex-col justify-center items-left">
        <label htmlFor="deadline" className="text-xl pl-2 text-white">
          Deadline
        </label>
        <input
          className="bg-stone-300 outline-0 text-stone-700 p-2 m-2 rounded"
          onInput={(e) => setDeadline(e.target.value)}
          value={deadline}
          id="deadline"
          type="date"
          name="deadline"
        />
      </div>

      <div className="flex flex-col justify-center items-left">
        <button
          type="submit"
          className="bg-zinc-400 outline-0 text-stone-950 p-2 m-2 mt-5 rounded cursor-pointer hover:scale-104 hover:bg-zinc-500 transition-all duration-300 ease-in-out"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default TasksForm;