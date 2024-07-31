import { useState, useEffect } from "react";
import { Input } from "./ui/input";
import { Button } from "@/components/ui/button";
import { DialogDemo } from "./DialogDemo";
import { Trash2 } from "lucide-react";
import { Save } from "lucide-react";

type ITasks = {
  id: number;
  text: string;
}[];

export default function CreateTask() {
  const [tasks, setTasks] = useState<ITasks>(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [inputValue, setInputValue] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleSetText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleSetNewTask = (id: number, newText: string) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, text: newText } : task)),
    );
  };

  const filteredTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const handleInputChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    setInputValue(e.target.value);
  };

  const handleSearchChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = () => {
    if (inputValue.trim() === "") {
      return true;
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

  return (
    <div className="flex flex-col gap-5 bg-sky-200 p-10 shadow-[8px_7px_0px_-1.5px_rgba(0,0,0,1)] shadow-sky-600">
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
      <Input
        className="text-center"
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Buscar tarefas"
      />
      <ul className="flex flex-col gap-2">
        {filteredTasks.map((task) => (
          <li className="flex items-center" key={task.id}>
            <div className="flex h-10 w-full items-center rounded-md border border-input bg-background pl-2 pr-2">
              {task.text}
            </div>
            <DialogDemo
              text={task.text}
              onChange={(e) => handleSetText(e)}
              onClick={() => handleSetNewTask(task.id, text)}
              inputValue={text}
              setInputValue={setText}
            />
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
    </div>
  );
}
