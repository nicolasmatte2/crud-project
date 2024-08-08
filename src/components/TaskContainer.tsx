import TaskList from "./TaskList";
import SearchBar from "./SearchBar";
import CreateTask from "./CreateTask";
import TaskContextProvider from "../context/TaskContext";

export default function TaskContainer() {
  return (
    <TaskContextProvider>
      <div className="flex flex-col gap-5 bg-sky-200 p-10 shadow-[8px_7px_0px_-1.5px_rgba(0,0,0,1)] shadow-sky-600">
        <CreateTask />
        <SearchBar />
        <TaskList />
      </div>
    </TaskContextProvider>
  );
}
