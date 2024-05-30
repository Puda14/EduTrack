import React from "react";
import { Card, CardHeader, CardBody, Image, Divider } from "@nextui-org/react";

export default function TaskCompleted() {
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
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
          </div>
          <div>Task Completed</div>
        </div>
        <div className="pl-11">
          {" "}
          <b>08</b>
        </div>
      </CardHeader>
      <Divider />
      <CardBody className="grid grid-cols-2 py-2 overflow-visible">
        <div>
          <img src="https://d1j8r0kxyu9tj8.cloudfront.net/files/BUjdrkU8QTBpHNt4GSMtpAL9RFNeWVdARLHLeB9x.png" />
        </div>
        <div>
          <p className="text-lime-500">08+</p>
          more from last week
        </div>
      </CardBody>
    </Card>
  );
}
