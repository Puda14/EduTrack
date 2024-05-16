import React from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import InProgressTag from "./InProgress";

export default function KPITabs() {
  return (
    <div className="flex flex-col w-full">
      <Tabs aria-label="Options" color="primary">
        <Tab key="photos" title="In progress ">
          <Card>
            <CardBody></CardBody>
          </Card>
        </Tab>
        <Tab key="music" title="Completed">
          <Card>
            <CardBody className="flex flex-col gap-5">
              <InProgressTag />
              <InProgressTag />
              <InProgressTag />
              <InProgressTag />
              <InProgressTag />
              <InProgressTag />
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}
