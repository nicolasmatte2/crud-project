import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Save } from "lucide-react";
import { useState } from "react";
import { useTasksContext } from "../context/TaskContext";

export default function CreateTask() {
  const [inputValue, setInputValue] = useState("");
  const { tasks, setTasks } = useTasksContext();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    if (inputValue.trim() === "") {
      return;
    }

    const newTask = {
      id: Date.now(),
      text: inputValue,
    };

    setTasks([...tasks, newTask]);
    setInputValue("");
  };
  return (
    <div className="flex gap-2">
      <Input
        className="text-center"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Digite uma nova tarefa"
      />
      <Button onClick={handleSubmit} variant="outline">
        <Save size={18} />
      </Button>
    </div>
  );
}
