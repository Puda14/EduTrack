import Image from "next/image";
import Task from "@/app/components/tasks/Task";
import Work from "@/app/components/works/Work";
import TaskDone from "@/app/components/charts/cards/TaskDone";
import KPI from "@/app/components/charts/cards/KPI";
import SpeedChart from "@/app/components/charts/SpeedChart";
import Speed from "@/app/components/charts/cards/Speed";
import KPITabs from "@/app/components/kpi/KPITabs";
import InProgressTag from "@/app/components/kpi/InProgress";
import TaskCompleted from "@/app/components/charts/cards/TaskCompleted";
import NewTask from "@/app/components/charts/cards/NewTask";
import GoalDone from "@/app/components/charts/cards/GoalDone";
import TaskRate from "@/app/components/taskrate/TaskRate";
import TaskRateMobile from "@/app/components/charts/cards/TaskRate";

export default function Home() {
  return (
    <main className="px-4 pt-10 md:px-20">
      <div className="flex flex-col justify-center">
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
