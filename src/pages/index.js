import Image from "next/image";
import Header from "@/app/components/header/Header";
import SideBar from "@/app/components/sidebar/SideBar";
import "./globals.css";
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <Header />
      <SideBar />
    </main>
  );
}
