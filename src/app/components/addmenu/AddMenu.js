import React from "react";
import { DateInput } from "@nextui-org/react";

const AddMenu = (props) => {
  return (
    <div className="py-16 overflow-scroll px-9">
      <div className="flex flex-row justify-between menu-container">
        <div className="w-3/6 border-2 form-menu">
          <h2 className="text-2xl">New Goal</h2>
          <form className="goal-form">
            <div>Title</div>
            <input className="bg-slate-500"></input>
            <div>From</div>
            <DateInput />
            <div>To</div>
            <DateInput />
            <div>Role</div>
            <input className="bg-slate-500"></input>
            <div>Hashtag</div>
            <input className="bg-slate-500"></input>
            <div>Description</div>
            <input className="bg-slate-500"></input>
          </form>
        </div>
        <div className="w-2/6 border-2 kpi-menu">
          <h2 className="text-2xl">KPI</h2>
        </div>
      </div>
    </div>
  );
};

export default AddMenu;
