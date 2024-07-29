import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "@/components/ui/button";
import { DialogDemo } from "./DialogDemo";

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

  const handleDeleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleSetText = (id: number, newText: string) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, text: newText } : task)),
    );
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
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text}
            <DialogDemo
              text={task.text}
              onChange={(e) => handleSetText(task.id, e.target.value)}
            />
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
