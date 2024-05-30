import UserIntro from "./UserIntro";
import HeatmapChart from "./HeatMap";

export default function Intro() {
  return (
    <div className="grid items-stretch grid-cols-3">
      <div className="col-span-2 mr-36 pt-7">
        <UserIntro />
      </div>
      <div>
        <HeatmapChart />
      </div>
    </div>
  );
}
