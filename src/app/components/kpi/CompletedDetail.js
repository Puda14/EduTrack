import React from "react";
import { Accordion, AccordionItem, Progress } from "@nextui-org/react";
import InProgressTag from "./InProgress";
import CompletedTag from "./CompletedTag";

export default function CompletedDetail() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <Accordion variant="splitted">
      <AccordionItem
        key="1"
        startContent={<CompletedTag goal={"Lecturer"} />}
        hideIndicator="false"
      >
        <Progress
          size="sm"
          radius="sm"
          classNames={{
            base: "max-w-md",
            track: "drop-shadow-md border border-default",
            indicator: "bg-gradient-to-r from-blue-200 to-blue-600",
            label: "tracking-wider font-medium text-default-600",
            value: "text-foreground/60",
          }}
          label="KPI 1"
          value={65}
          showValueLabel={true}
        />
      </AccordionItem>
      <AccordionItem
        key="2"
        startContent={<CompletedTag goal={"Researchers"} />}
        hideIndicator="false"
      >
        <Progress
          size="sm"
          radius="sm"
          classNames={{
            base: "max-w-md",
            track: "drop-shadow-md border border-default",
            indicator: "bg-gradient-to-r from-blue-200 to-blue-600",
            label: "tracking-wider font-medium text-default-600",
            value: "text-foreground/60",
          }}
          label="KPI 1"
          value={65}
          showValueLabel={true}
        />
        <Progress
          size="sm"
          radius="sm"
          classNames={{
            base: "max-w-md",
            track: "drop-shadow-md border border-default",
            indicator: "bg-gradient-to-r from-blue-200 to-blue-600",
            label: "tracking-wider font-medium text-default-600",
            value: "text-foreground/60",
          }}
          label="KPI 2"
          value={30}
          showValueLabel={true}
        />
      </AccordionItem>
      <AccordionItem
        key="3"
        startContent={<CompletedTag goal={"officer"} />}
        hideIndicator="false"
      >
        <Progress
          size="sm"
          radius="sm"
          classNames={{
            base: "max-w-md",
            track: "drop-shadow-md border border-default",
            indicator: "bg-gradient-to-r from-blue-200 to-blue-600",
            label: "tracking-wider font-medium text-default-600",
            value: "text-foreground/60",
          }}
          label="KPI 1"
          value={30}
          showValueLabel={true}
        />
        <Progress
          size="sm"
          radius="sm"
          classNames={{
            base: "max-w-md",
            track: "drop-shadow-md border border-default",
            indicator: "bg-gradient-to-r from-blue-200 to-blue-600",
            label: "tracking-wider font-medium text-default-600",
            value: "text-foreground/60",
          }}
          label="KPI 3"
          value={60}
          showValueLabel={true}
        />
        <Progress
          size="sm"
          radius="sm"
          classNames={{
            base: "max-w-md",
            track: "drop-shadow-md border border-default",
            indicator: "bg-gradient-to-r from-blue-200 to-blue-600",
            label: "tracking-wider font-medium text-default-600",
            value: "text-foreground/60",
          }}
          label="KPI 3"
          value={90}
          showValueLabel={true}
        />
      </AccordionItem>
    </Accordion>
  );
}
