import Image from "next/image";
import Header from "@/app/components/header/Header";
import SideBar from "@/app/components/sidebar/SideBar";
import Task from "@/app/components/tasks/Task";
import Work from "@/app/components/works/Work";
import TaskDone from "@/app/components/charts/cards/TaskDone";
import KPI from "@/app/components/charts/cards/KPI";
import SpeedChart from "@/app/components/charts/SpeedChart";
import Speed from "@/app/components/charts/cards/Speed";
import KPITabs from "@/app/components/kpi/KPITabs";
import InProgressTag from "@/app/components/kpi/InProgress";
import "./globals.css";
import "flowbite";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <Header />
      <InProgressTag />
    </main>
  );
}
