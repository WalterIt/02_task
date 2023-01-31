import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

import Task from "./Task";
import TaskForm from "./TaskForm";
import { URL } from "../App";
import loadingImg from "../assets/loader.gif";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [taskId, setTaskId] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    completed: false,
  });

  const { name } = formData;

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  async function createTask(e) {
    e.preventDefault();
    // console.log(formData);
    if (name === "") {
      return toast.error("This field can not be empty!");
    }

    try {
      await axios.post(`${URL}/api/tasks/`, formData);
      toast.success("Task added successfully!");
      setFormData({ ...formData, name: "" });
    } catch (error) {
      toast.error(error.message);
      // console.log(error);
    }
  }

  async function getTasks() {
    setLoading(true);
    try {
      const { data } = await axios.get(`${URL}/api/tasks/`);
      console.log(data);
      setTasks(data);
      setLoading(false);
    } catch (error) {
      toast.error(error.message);
      // console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    getTasks();
  }, []);

  async function deleteTask(id) {
    try {
      await axios.delete(`${URL}/api/tasks/${id}`);
      getTasks();
    } catch (error) {
      toast.error(error.message);
    }
  }

  async function getSingleTask(task) {
    setFormData({ name: task.name, completed: false });
    setTaskId(task._id);
    setIsEditing(true);
  }

  async function updateTask(e) {
    e.preventDefault();
    if (name === "") {
      return toast.error("This field can not be empty!");
    }
    try {
      await axios.put(`${URL}/api/tasks/${taskId}`, formData);
      setFormData({ ...formData, name: "" });
      setIsEditing(false);
      getTasks();
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <div>
      <h2>Task Manager</h2>
      <TaskForm
        name={name}
        handleInputChange={handleInputChange}
        createTask={createTask}
        isEditing={isEditing}
        updateTask={updateTask}
      />
      <div className="--flex-between --pb">
        <p>
          <b>Total Tasks: </b> {tasks.length}
        </p>
        <p>
          <b>Completed Tasks: </b> 0
        </p>
      </div>
      <hr />
      {loading && (
        <div className="--flex-center">
          <img src={loadingImg} alt="loading image" />
        </div>
      )}
      {!loading && tasks.length === 0 ? (
        <p className="--py">No Task added. Please, add a Task!</p>
      ) : (
        <>
          {tasks.map((task, index) => {
            return (
              <Task
                task={task}
                index={index}
                key={task._id}
                deleteTask={deleteTask}
                getSingleTask={getSingleTask}
              />
            );
          })}
        </>
      )}
    </div>
  );
}
