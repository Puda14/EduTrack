// pages/_app.js
import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/router";
import Header from "@/app/components/header/Header";
import SideBar from "@/app/components/sidebar/SideBar";
import "./globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const noLayoutPages = ["/"]; // Các trang không cần layout chung

  const isNoLayoutPage = noLayoutPages.includes(router.pathname);

  return (
    <NextUIProvider navigate={router.push} className="flex">
      {isNoLayoutPage ? (
        <Component {...pageProps} />
      ) : (
        <div className="flex">
          <div className="">
            <SideBar />
          </div>

          <div className="grow" style={{ backgroundColor: "#f3f4f8" }}>
            <div style={{ backgroundColor: "#f3f4f8" }}>
              <Header />
            </div>

            <Component {...pageProps} />
          </div>
        </div>
      )}
    </NextUIProvider>
  );
}

export default MyApp;
