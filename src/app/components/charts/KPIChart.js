import { useEffect } from "react";
import { Chart } from "chart.js";
function KPIChart() {
  useEffect(() => {
    var ctx = document.getElementById("myChart").getContext("2d");
    var myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"],
        datasets: [
          {
            data: [70, 90, 44, 60, 83, 90, 100],
            label: "Accepted",
            borderColor: "#fec44a",
            backgroundColor: "#fec44a",
            borderWidth: 2,
          },
          {
            data: [10, 21, 60, 44, 17, 21, 17],
            label: "Pending",
            borderColor: "#9b8ceb",
            backgroundColor: "#9b8ceb",
            borderWidth: 2,
          },
        ],
      },
      options: {
        scales: {
          xAxes: [
            {
              stacked: true,
            },
          ],
          yAxes: [
            {
              stacked: true,
            },
          ],
        },
      },
    });
  }, []);

  return (
    <>
      {/* Stacked chart */}

      <div className="md:w-[300px] md:h-700  mx-auto my-auto">
        <div className="w-full pt-0 border border-gray-400 shadow-xl rounded-xl">
          <canvas id="myChart"></canvas>
        </div>
      </div>
    </>
  );
}

export default KPIChart;
