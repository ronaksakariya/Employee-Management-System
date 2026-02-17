const TaskType = () => {
  return (
    <div className="flex justify-between gap-5">
      <div className="bg-blue-400 py-6 px-9 rounded-xl">
        <h2 className="text-3xl font-bold">1</h2>
        <h3 className="text-xl mt-0.5 font-medium">New Task</h3>
      </div>
      <div className="bg-green-400 py-6 px-9 rounded-xl">
        <h2 className="text-3xl font-bold">1</h2>
        <h3 className="text-xl mt-0.5 font-medium">Completed Task</h3>
      </div>
      <div className="bg-yellow-400 py-6 px-9 rounded-xl">
        <h2 className="text-3xl font-bold">1</h2>
        <h3 className="text-xl mt-0.5 font-medium">Accepted Task</h3>
      </div>
      <div className="bg-red-400 py-6 px-9 rounded-xl">
        <h2 className="text-3xl font-bold">1</h2>
        <h3 className="text-xl mt-0.5 font-medium">Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskType;
