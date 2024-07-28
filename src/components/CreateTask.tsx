import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "@/components/ui/button";
import DialogDemo from "./DialogDemo";

type ITasks = {
  id: number;
  text: string;
}[];
function TaskApp() {
  const [tasks, setTasks] = useState<ITasks>([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    setInputValue(e.target.value);
  };

  const handleDeleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
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
    console.log(tasks);
  };

  return (
    <div className="bg-sky-200">
      <Input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Digite uma nova tarefa"
      />
      <Button onClick={handleSubmit} variant="outline">
        Enviar
      </Button>

      <ul>
        {tasks.map((task, i) => (
          <li key={i}>
            {task.text}

            <DialogDemo></DialogDemo>
            <Button
              variant="destructive"
              onClick={() => handleDeleteTask(task.id)}
            >
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskApp;
