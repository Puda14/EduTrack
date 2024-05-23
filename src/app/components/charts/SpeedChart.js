import { useEffect } from "react";
import { Chart } from "chart.js";
function SpeedChart() {
  useEffect(() => {
    var ctx = document.getElementById("myChart").getContext("2d");
    var myChart = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Accepted", "Pending", "Rejected"],
        datasets: [
          {
            data: [70, 10, 6],
            borderColor: [
              "rgba(166,148,252,255)",
              "rgba(251,203,94,255)",
              "rgba(112,204,250,255)",
            ],
            backgroundColor: [
              "rgba(166,148,252,255)",
              "rgba(251,203,94,255)",
              "rgba(112,204,250,255)",
            ],
            borderWidth: 2,
          },
        ],
      },
      options: {
        scales: {
          xAxes: [
            {
              display: false,
            },
          ],
          yAxes: [
            {
              display: false,
            },
          ],
        },
      },
    });
  }, []);

  return (
    <>
      {/* Doughnut chart */}

      <div className="md:w-[300px] flex mx-auto my-auto">
        <div className="w-full pt-0 pb-2 my-auto border border-gray-400 shadow-xl rounded-xl h-fit">
          <canvas id="myChart"></canvas>
        </div>
      </div>
    </>
  );
}

export default SpeedChart;
