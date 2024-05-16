import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Divider,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import KPIChart from "../KPIChart";

export default function KPI() {
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="relative flex flex-col gap-3">
        <div className="relative right-0 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6"
          >
            <path
              fill-rule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div className="grid grid-cols-2">
          <div className="px-8 mr-4">
            <Dropdown backdrop="blur">
              <DropdownTrigger>
                <Button variant="bordered">Daily</Button>
              </DropdownTrigger>
              <DropdownMenu variant="faded" aria-label="Static Actions">
                <DropdownItem key="new">Weekly</DropdownItem>
                <DropdownItem key="copy">Monthly</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
          <div className="px-6">KPI:</div>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <KPIChart />
      </CardBody>
    </Card>
  );
}
