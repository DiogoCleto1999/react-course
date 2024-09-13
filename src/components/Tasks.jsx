import { CheckIcon, ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks(props) {
  const navigate = useNavigate();
  console.log(props);

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }
  return (
    <div>
      <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
        {props.tasks.map((task) => (
          <li key={task.id} className="flex gap-2">
            <button
              //quando se quer enviar algum valor na função precisa levar () => antes
              onClick={() => props.onTaskClick(task.id)}
              className={`bg-slate-400 w-full flex items-center gap-2 text-left text-white p-2 rounded-md ${
                task.isCompleted ? "line-through" : ""
              }`}
            >
              {task.isCompleted && <CheckIcon />}
              {task.title}
            </button>
            <Button onClick={() => onSeeDetailsClick(task)}>
              <ChevronRightIcon />
            </Button>
            <Button onClick={() => props.onTaskDeleted(task.id)}>
              <TrashIcon />
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tasks;
