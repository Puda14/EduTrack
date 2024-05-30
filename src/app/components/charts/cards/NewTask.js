import React from "react";
import { Card, CardHeader, CardBody, Image, Divider } from "@nextui-org/react";

export default function NewTask() {
  return (
    <Card className="py-4 mb-3 w-72">
      <CardHeader className="grid-cols-3 px-4 pt-2 pb-0">
        <div className="flex col-span-2 pr-5">
          <div className="pr-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
              />
            </svg>
          </div>
          <div>New Task </div>
        </div>
        <div className="pl-11">
          {" "}
          <b>08</b>
        </div>
      </CardHeader>
      <Divider />
      <CardBody className="grid grid-cols-2 py-2 overflow-visible">
        <div>
          <img src="https://d1j8r0kxyu9tj8.cloudfront.net/files/hFAZRkgGFoa6QpnC0HcYnbIHoC62URcE8yqvknf9.png" />
        </div>
        <div>
          <p className="text-lime-500">10+</p>
          more from last week
        </div>
      </CardBody>
    </Card>
  );
}