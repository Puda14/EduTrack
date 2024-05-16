// pages/_app.tsx
import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/router";
import Header from "@/app/components/header/Header";
import SideBar from "@/app/components/sidebar/SideBar";
import "./globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <NextUIProvider navigate={router.push} className="flex">
      <SideBar />
      <div className="grow">
        <Header />
        <Component {...pageProps} />
      </div>
    </NextUIProvider>
  );
}

export default MyApp;
