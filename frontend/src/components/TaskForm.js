export default function TaskForm({ createTask, name, handleInputChange }) {
  return (
    <form className="task-form" onSubmit={createTask}>
      <input
        type="text"
        name="name"
        placeholder="Add a Task"
        value={name}
        onChange={handleInputChange}
        id=""
      />
      <button type="submit">Add</button>
    </form>
  );
}
