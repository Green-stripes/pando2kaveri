import { Controller } from "@hotwired/stimulus";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

export default class extends Controller {
  static targets = ["myChart", "myChart1"];

  connect() {
    const data = JSON.parse(
      this.myChartTarget.getAttribute("data-graphics-chart-data")
    );
    const data1 = JSON.parse(
      this.myChart1Target.getAttribute("data-graphics-chart1-data")
    ); // Fetch data from data attribute

    new Chart(this.myChartTarget, {
      type: "line",
      options: {
        plugins: {
          title: {
            display: true,
            text: "Room 4",
          },
        },
      },
      data: {
        labels: data.labels,
        datasets: [
          {
            label: "CO2 Levels",
            data: data.data_CO2,
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
          },
          {
            label: "TMP Levels",
            data: data.data_TMP,
            backgroundColor: "rgba(255, 255, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
          },
          {
            label: "VOCT Levels",
            data: data.data_VOCT,
            backgroundColor: "rgba(255, 99, 255, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
          },
          {
            label: "HUM Levels",
            data: data.data_HUM,
            backgroundColor: "rgba(255, 99, 255, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
          },
        ],
      },
    });

    new Chart(this.myChart1Target, {
      type: "line",
      options: {
        plugins: {
          title: {
            display: true,
            text: "Room 1",
          },
        },
      },
      data: {
        labels: data1.labels,
        datasets: [
          {
            label: "CO2 Levels",
            data: data1.data_CO2,
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
          },
          {
            label: "TMP Levels",
            data: data1.data_TMP,
            backgroundColor: "rgba(255, 255, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
          },
          {
            label: "VOCT Levels",
            data: data1.data_VOCT,
            backgroundColor: "rgba(255, 99, 255, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
          },
          {
            label: "HUM Levels",
            data: data1.data_HUM,
            backgroundColor: "rgba(255, 99, 255, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
          },
        ],
      },
    });
  }
}
