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

export default function Home() {
  return (
    <main className="px-20 pt-10">
      <div className="flex flex-col">
        <div className="grid grid-cols-3">
          <div>
            <TaskCompleted />
          </div>
          <div>
            {" "}
            <NewTask />
          </div>
          <div>
            <GoalDone />
          </div>
        </div>

        <TaskDone />
        <Task />
      </div>
    </main>
  );
}
