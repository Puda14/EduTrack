import React from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import InProgressTag from "./InProgress";
import ProgressDetail from "./ProgressDetail";
import CompletedDetail from "./CompletedDetail";

export default function KPITabs() {
  return (
    <div className="flex flex-col w-full">
      <Tabs aria-label="Options" color="default">
        <Tab key="photos" title="In progress ">
          <Card>
            <CardBody>
              <ProgressDetail />
            </CardBody>
          </Card>
        </Tab>
        <Tab key="music" title="Completed">
          <Card>
            <CardBody>
              <CompletedDetail />
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}
