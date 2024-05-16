import Image from "next/image";
import Task from "@/app/components/tasks/Task";
import Work from "@/app/components/works/Work";
import TaskDone from "@/app/components/charts/cards/TaskDone";
import KPI from "@/app/components/charts/cards/KPI";
import SpeedChart from "@/app/components/charts/SpeedChart";
import Speed from "@/app/components/charts/cards/Speed";
import KPITabs from "@/app/components/kpi/KPITabs";
import InProgressTag from "@/app/components/kpi/InProgress";
import "flowbite";
import { Avatar } from "@nextui-org/react";

export default function Home() {
  return (
    <main className="px-20 pt-10">
      <div className="flex gap-10">
        <div className="flex items-center gap-5 p-10 bg-white rounded-xl">
          <div>
            <Avatar
              src="https://i.pravatar.cc/150?u=a04258114e29026708c"
              className="w-32 h-32 tet-3xl"
            />
          </div>
          <div>
            <div className="text-xl font-bold">Natalie Wheeler</div>
            <div className="text-lg font-bold">Lecturer</div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
        </div>
        <SpeedChart />
      </div>
    </main>
  );
}
