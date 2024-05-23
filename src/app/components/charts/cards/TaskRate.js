import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";

export default function TaskRateMobile() {
  return (
    <div className="flex justify-center w-full pb-5">
      <Card className="border-2 sm:hidden border-slate-400 min-w-[400px]">
        <CardBody>
          <div className="flex text-gray-400 ">
            <div className="justify-center w-1/2 pr-5">
              <p className="py-2">Task Completed</p>
              <p className="py-2">New Task</p>
              <p className="py-2">Goal Done</p>
            </div>
            <div className="justify-center w-1/2">
              <p className="py-2 text-center">08</p>
              <p className="py-2 text-center">10</p>
              <p className="py-2 text-center">10</p>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
