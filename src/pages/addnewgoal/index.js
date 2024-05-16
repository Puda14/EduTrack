import KPITabs from "@/app/components/kpi/KPITabs";
import { Input } from "@nextui-org/input";
import { DateInput } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { useState } from "react";

const AddNewGoalPage = () => {
  const [list, setList] = useState([]);

  const handleAddToList = (item) => {
    setList;
  };
  // list contains goals
  // list = [ {task = [{name, type, fromDate, toDate, description} ], title, fromDate, toDate, role, hashtag, description} ]
  //
  return (
    <div className="flex-container flex flex-col justify-between">
      <div classname="goal-menu flex flex-row item-end">
        <form
          onSubmit={handleAddToList}
          classname="goal-menu flex flex-row w-full"
        >
          <h2>New Goal</h2>
          <div>Title</div>
          <Input />
          <div>From</div>
          <DateInput />
          <div>To</div>
          <DateInput />
          <div>Role</div>
          <Input />
          <div>Description</div>
          <Input />
        </form>{" "}
        <Button>Add Goal</Button>
      </div>
      <div className="kpi-menu flex flex-row item-center">
        <h2>KPI</h2>
        <KPITabs />
        <KPITabs />
        <Button>ADD NEW KPI</Button>
      </div>
    </div>
  );
};

export default AddNewGoalPage;
