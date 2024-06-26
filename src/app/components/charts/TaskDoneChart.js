import { useEffect } from "react";
import { Chart } from "chart.js";
function TaskDoneChart() {
  useEffect(() => {
    var ctx = document.getElementById("myChart").getContext("2d");
    var myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"],
        datasets: [
          {
            data: [0, 114, 106, 106, 107, 111, 0],
            label: "last week",
            borderColor: "rgba(98,99,249,255)",
            backgroundColor: "rgb(62,149,205,0.1)",
          },
          {
            data: [0, 90, 44, 60, 83, 90, 0],
            label: "this week",
            borderColor: "rgba(36,169,255,255)",
            backgroundColor: "rgb(60,186,159,0.1)",
          },
        ],
      },
    });
  }, []);

  return (
    <>
      {/* Filled line chart */}
      <div className="md:w-[700px] w-full md:h-500 h-auto flex mx-auto my-auto">
        <div className="w-full pt-0 my-auto border border-gray-400 shadow-xl rounded-xl h-fit">
          <canvas id="myChart"></canvas>
        </div>
      </div>
    </>
  );
}

export default TaskDoneChart;
