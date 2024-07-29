import CreateTask from "@/components/CreateTask";
import "../index.css";
export default function Root() {
  return (
    <div className="flex h-screen items-center justify-center bg-amber-50">
      <CreateTask />
    </div>
  );
}
