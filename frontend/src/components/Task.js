import { FaCheckDouble, FaEdit, FaRegTrashAlt } from "react-icons/fa";

export default function Task() {
  return (
    <div className="task">
      <p>
        <b>1. </b> Task 0
      </p>
      <div className="task-icons">
        <FaCheckDouble color="green" />
        <FaEdit color="purple" />
        <FaRegTrashAlt color="red" />
      </div>
    </div>
  );
}
