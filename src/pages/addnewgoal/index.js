import { Input } from "@nextui-org/input";
import { DateInput } from "@nextui-org/react";
import { Button } from "@nextui-org/react";

const AddNewGoalPage = () => {
  return (
    <div className="flex-container flex flex-col justify-between">
      <div>
        <h2>New Goal</h2>
        <div>Title</div>
        <Input />
        <div>From</div>
        <DateInput />
        <div>To</div>
        <DateInput />
        <div>Role</div>
        <Input />
        <div>Hashtag</div>
        <Input />
        <div>Description</div>
        <Input />
        <Button />
      </div>
      <div>
        <h2>KPI</h2>
        <Button />
      </div>
    </div>
  );
};

export default AddNewGoalPage;
