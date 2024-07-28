import CreateTask from "@/components/CreateTask";
import "../index.css";
export default function Root() {
  return (
    <div className="flex h-screen items-center justify-center bg-slate-300">
      <CreateTask />
    </div>
  );
}
