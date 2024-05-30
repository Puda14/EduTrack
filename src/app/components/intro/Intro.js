import UserIntro from "./UserIntro";
import HeatmapChart from "./HeatMap";
import { Card } from "@nextui-org/react";

export default function Intro() {
  return (
    <div className="items-stretch hidden grid-cols-3 mb-8 md:grid">
      <div className="col-span-2 mr-36" style={{ height: "250px" }}>
        <UserIntro />
      </div>
      <Card className="pb-3 bg-white " style={{ height: "250px" }}>
        <HeatmapChart />
      </Card>
    </div>
  );
}
