import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Progress } from "@nextui-org/progress";
import { Button } from "@nextui-org/react";
import { PlayIcon } from "../icons/PlayIcon";
import { Link } from "@nextui-org/link";
import { AnchorIcon } from "../icons/AnchorIcon";
import { color } from "framer-motion";

export default function Task() {
  return (
    <Card className="flex">
      <CardBody>
        <div className="grid grid-cols-3 sm:grid-cols-4">
          <div className="flex">
            {" "}
            <Button className="w-12 h-12 rounded-full bg-none">
              <PlayIcon />
            </Button>
            <div className="flex flex-col pl-4">
              <div>Start from</div>
              <div className="text-gray-500">
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
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex-col hidden sm:flex">
            <div>Search Inspiration for project</div>
            <div>
              <Link
                isExternal
                showAnchorIcon
                href=""
                anchorIcon={<AnchorIcon />}
              >
                link...
              </Link>
            </div>
          </div>
          <div className="">
            <Progress
              size="sm"
              radius="sm"
              classNames={{
                base: "max-w-md",
                track: "drop-shadow-md border border-default",
                indicator: "bg-gradient-to-r from-blue-500 to-blue-600",
                label: "tracking-wider font-medium text-default-600",
                value: "text-foreground/60",
              }}
              label="complete"
              value={65}
              showValueLabel={true}
            />
          </div>
          <div className="pl-10">
            <Button style={{ color: "#5657fb" }}>
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
                  d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"
                />
              </svg>
              Remind
            </Button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
