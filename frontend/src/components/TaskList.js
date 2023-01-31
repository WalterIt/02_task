import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

import Task from "./Task";
import TaskForm from "./TaskForm";
import { URL } from "../App";

export default function TaskList() {
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
      console.log(error);
    }
  }

  return (
    <div>
      <h2>Task Manager</h2>
      <TaskForm
        name={name}
        handleInputChange={handleInputChange}
        createTask={createTask}
      />
      <div className="--flex-between --pb">
        <p>
          <b>Total Tasks: </b> 0
        </p>
        <p>
          <b>Completed Tasks: </b> 0
        </p>
      </div>
      <hr />
      <Task />
    </div>
  );
}
