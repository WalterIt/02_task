import { FaCheckDouble, FaEdit, FaRegTrashAlt } from "react-icons/fa";

export default function Task({
  task,
  index,
  deleteTask,
  getSingleTask,
  setTaskCompleted,
}) {
  return (
    <div className={task.completed ? "task completed" : "task"}>
      <p>
        <b>{index + 1}. </b> {task.name}
      </p>
      <div className="task-icons">
        <FaCheckDouble onClick={() => setTaskCompleted(task)} color="green" />
        <FaEdit onClick={() => getSingleTask(task)} color="purple" />
        <FaRegTrashAlt onClick={() => deleteTask(task._id)} color="red" />
      </div>
    </div>
  );
}
