import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

type TaskContextProviderProps = {
  children: ReactNode;
};

type ITasks = {
  id: number;
  text: string;
};

type TaskContextProps = {
  tasks: ITasks[];
  setTasks: (tasks: ITasks[]) => void;
  search: string;
  setSearch: (search: string) => void;
};

export const TaskContext = createContext<TaskContextProps>(
  {} as TaskContextProps,
);

export default function TaskContextProvider({
  children,
}: TaskContextProviderProps) {
  const [tasks, setTasks] = useState<ITasks[]>(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const [search, setSearch] = useState("");

  const value: TaskContextProps = { tasks, setTasks, search, setSearch };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
}

export const useTasksContext = () => useContext(TaskContext);
