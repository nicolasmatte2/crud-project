import React from "react";
import { Input } from "./ui/input";
import { useTasksContext } from "../context/TaskContext";

export default function SearchBar() {
  const { search, setSearch } = useTasksContext();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <Input
      className="text-center"
      type="text"
      value={search}
      onChange={handleChange}
      placeholder="Search tasks..."
    />
  );
}
