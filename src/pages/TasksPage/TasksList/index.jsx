import React from 'react';

const TasksList = ({ tasks = [], setSelectedTask, deleteTask }) => {
  const handleEdit = (task) => {
    setSelectedTask(task);
  };

  const handleDelete = (taskId) => {
    deleteTask(taskId);
  };

  return (
    <div className="bg-stone-900 max-w-4xl m-auto p-6 mt-6 mb-6 rounded shadow-xl/40">
      <h1 className="flex justify-center items-center text-3xl m-8 text-white">Tasks List</h1>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-stone-200">
          <thead className="bg-stone-800">
            <tr>
              <th className="p-3 text-xl">ID</th>
              <th className="p-3 text-xl">Title</th>
              <th className="p-3 text-xl">Description</th>
              <th className="p-3 text-xl">Status</th>
              <th className="p-3 text-xl">Deadline</th>
              <th className="p-3 text-xl">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks?.map((task) => (
              <tr
                key={task.id}
                className="border-b border-stone-700 hover:bg-stone-800 transition-all duration-300 ease-in-out"
              >
                <td className="p-3">{task.id}</td>
                <td className="p-3">{task.title}</td>
                <td className="p-3">{task.description}</td>
                <td className="p-3">{task.status}</td>
                <td className="p-3">{task.deadline}</td>
                <td className="p-3 flex gap-2">
                  <button
                    onClick={() => handleEdit(task)}
                    className="bg-stone-700 px-5 py-1 rounded cursor-pointer hover:bg-stone-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(task.id)}
                    className="bg-red-600 px-5 py-1 rounded cursor-pointer hover:bg-red-500"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TasksList;