import React from "react";
import { Card, CardHeader, CardBody, Link } from "@nextui-org/react";
import TaskDoneChart from "../TaskDoneChart";

export default function TaskDone() {
  return (
    <Card className="py-4 mb-5">
      <CardHeader className="flex grid items-start grid-cols-3 px-4 pt-2 pb-0 ">
        <div className="col-span-2 text-2xl font-semibold">
          <h2> Task Done</h2>
        </div>
        <div className="grid-cols-3 rid ">
          <div>
            <Link href="#" underline="active" color="foreground">
              Daily
            </Link>
          </div>
          <div>
            <Link href="#" underline="active" color="foreground">
              Weekly
            </Link>
          </div>
          <div>
            <Link href="#" underline="active" color="foreground">
              Monthly
            </Link>
          </div>
        </div>
      </CardHeader>
      <CardBody className="py-2 overflow-visible">
        <TaskDoneChart />
      </CardBody>
    </Card>
  );
}
