import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { SquarePen } from "lucide-react";
import { useState } from "react";
import { useTasksContext } from "../context/TaskContext";

interface ITask {
  id: number;
  text: string;
}
interface DialogEditTaskProps {
  taskToEdit: ITask;
}

export function DialogEditTask({ taskToEdit }: DialogEditTaskProps) {
  const [inputValue, setInputValue] = useState(taskToEdit.text);
  const { tasks, setTasks } = useTasksContext();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleEdit = () => {
    if (inputValue.trim() !== "") {
      setTasks(
        tasks.map((task) =>
          task.id === taskToEdit.id ? { ...task, text: inputValue } : task,
        ),
      );
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-amber-300 hover:bg-amber-400" variant="outline">
          <SquarePen size={18} />
        </Button>
      </DialogTrigger>
      <DialogContent className="flex w-80 flex-col gap-4">
        <DialogHeader>
          <DialogTitle>Edit Text</DialogTitle>
          <DialogDescription>Make changes to your text here.</DialogDescription>
        </DialogHeader>
        <Input
          id="submit"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter new text"
        />
        <DialogClose asChild>
          <Button
            type="button"
            variant="default"
            className="bg-green-600 hover:bg-green-800"
            onClick={handleEdit}
            disabled={!inputValue.trim()}
          >
            Save
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
