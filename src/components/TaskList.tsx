import { Trash2 } from "lucide-react";
import { DialogEditTask } from "./DialogEditTask";
import { Button } from "./ui/button";
import { useTasksContext } from "../context/TaskContext";

export default function TaskList() {
  const { tasks, setTasks, search } = useTasksContext();
  const filteredTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(search.toLowerCase()),
  );

  const handleDeleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <ul className="flex flex-col gap-2">
      {filteredTasks.map((task) => (
        <li className="flex gap-2" key={task.id}>
          <div className="flex h-10 w-full items-center rounded-md bg-white px-2">
            {task.text}
          </div>
          <DialogEditTask taskToEdit={task} />
          <Button
            variant="destructive"
            className="hover:bg-red-700"
            onClick={() => handleDeleteTask(task.id)}
          >
            <Trash2 size={16} />
          </Button>
        </li>
      ))}
    </ul>
  );
}
