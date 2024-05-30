import Task from "@/app/components/tasks/Task";
import TaskDone from "@/app/components/charts/cards/TaskDone";
import TaskRate from "@/app/components/taskrate/TaskRate";
import TaskRateMobile from "@/app/components/charts/cards/TaskRate";
import Intro from "@/app/components/intro/Intro";

export default function Home() {
  return (
    <main className="px-4 pt-10 md:px-20">
      <div className="flex flex-col justify-center">
        <Intro />
        <TaskRate />
        <TaskRateMobile />
        <TaskDone />
        <div className="hidden sm:block">
          {" "}
          <Task />
        </div>
      </div>
    </main>
  );
}
