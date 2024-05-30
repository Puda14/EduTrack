import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

const HeatmapChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartInstance = echarts.init(chartRef.current);

    const hours = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
    const days = ["12pm", "8pm", "4pm", "12am", "8am", "4 am"];
    const data = [
      [5, 0, 26],
      [5, 1, 30],
      [5, 2, 28],
      [5, 3, 27],
      [5, 4, 30],
      [5, 5, 30],
      [5, 6, 27],
      [4, 0, 32],
      [4, 1, 33],
      [4, 2, 30],
      [4, 3, 31],
      [4, 4, 35],
      [4, 5, 29],
      [4, 6, 35],
      [3, 0, 37],
      [3, 1, 39],
      [3, 2, 35],
      [3, 3, 33],
      [3, 4, 36],
      [3, 5, 38],
      [3, 6, 35],
      [2, 0, 37],
      [2, 1, 37],
      [2, 2, 27],
      [2, 3, 37],
      [2, 4, 31],
      [2, 5, 37],
      [2, 6, 26],
      [1, 0, 29],
      [1, 1, 30],
      [1, 2, 37],
      [1, 3, 37],
      [1, 4, 37],
      [1, 5, 27],
      [1, 6, 30],
      [0, 0, 32],
      [0, 1, 28],
      [0, 2, 32],
      [0, 3, 25], // Thêm giá trị
      [0, 4, 27], // Thêm giá trị
      [0, 5, 22], // Thêm giá trị
      [0, 6, 30], // Thêm giá trị
    ].map(function (item) {
      return [item[1], item[0], item[2] || "-"];
    });

    const option = {
      tooltip: {
        position: "top",
      },
      grid: {
        height: "50%",
        top: "10%",
      },
      xAxis: {
        type: "category",
        data: hours,
        splitArea: {
          show: true,
        },
      },
      yAxis: {
        type: "category",
        data: days,
        splitArea: {
          show: true,
        },
      },
      visualMap: {
        min: 0,
        max: 45,
        dimension: 2,
        orient: "horizontal",
        left: "center",
        bottom: "15%",
        text: ["HIGH", "LOW"],
        calculable: true,
        inRange: {
          color: ["#e8e8f7", "#cacaff", "#8e8eff", "#4f4fff"],
        },
      },
      series: [
        {
          name: "Economic Expectations",
          type: "heatmap",
          data: data,
          label: {
            show: false,
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
    };

    chartInstance.setOption(option);

    const handleResize = () => {
      chartInstance.resize();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      chartInstance.dispose();
    };
  }, []);

  return (
    <div
      id="chart-container"
      ref={chartRef}
      style={{ width: "100%", height: "300px" }}
    />
  );
};

export default HeatmapChart;
