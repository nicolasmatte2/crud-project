import TaskContainer from "@/components/TaskContainer";
import "../index.css";
export default function Root() {
  return (
    <div className="flex h-screen items-center justify-center bg-amber-100">
      <TaskContainer />
    </div>
  );
}
