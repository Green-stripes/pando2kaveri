import { Controller } from "@hotwired/stimulus";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

export default class extends Controller {
  static targets = ["myChart", "myChart1", "myChart3", "myChart4"];

  connect() {
    const data = JSON.parse(
      this.myChartTarget.getAttribute("data-graphics-chart-data")
    );
    const data1 = JSON.parse(
      this.myChart1Target.getAttribute("data-graphics-chart1-data")
    );
    const data3 = JSON.parse(
      this.myChart3Target.getAttribute("data-graphics-chart3-data")
    );
    const data4 = JSON.parse(
      this.myChart4Target.getAttribute("data-graphics-chart4-data")
    );

    new Chart(this.myChartTarget, {
      type: "line",
      options: {
        plugins: {
          title: {
            display: true,
            text: "CO2 Levels",
          },
          datalabels: {
            display: function (context) {
              return context.chart.isDatasetVisible(context.datasetIndex);
          }
        },
        },
        scales: {
          x: {
            display: false,
          },
        }
      },
      data: {
        labels: data.labels,
        datasets: [
          {
            label: "Room 1",
            data: data.data_CO2_1,
            backgroundColor: "rgba(3, 169, 252, 0.2)",
            borderColor: "rgba(3, 169, 252, 1)",
            borderWidth: 1,
          },
          {
            label: "Room 3",
            data: data.data_CO2_3,
            backgroundColor: "rgba(252, 161, 3, 0.2)",
            borderColor: "rgba(252, 161, 3, 1)",
            borderWidth: 1,
          },
          {
            label: "Room 4",
            data: data.data_CO2_4,
            backgroundColor: "rgba(255, 99, 255, 0.1)",
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
            text: "TMP Levels",
          },
          datalabels: {
            display: function (context) {
              return context.chart.isDatasetVisible(context.datasetIndex);
          }
        },
        },
        scales: {
          x: {
            display: false,
          },
        }
      },
      data: {
        labels: data1.labels,
        datasets: [
          {
            label: "Room 1",
            data: data1.data_TMP_1,
            backgroundColor: "rgba(3, 169, 252, 0.2)",
            borderColor: "rgba(3, 169, 252, 1)",
            borderWidth: 1,
          },
          {
            label: "Room 3",
            data: data1.data_TMP_3,
            backgroundColor: "rgba(252, 161, 3, 0.2)",
            borderColor: "rgba(252, 161, 3, 1)",
            borderWidth: 1,
          },
          {
            label: "Room 4",
            data: data1.data_TMP_4,
            backgroundColor: "rgba(255, 99, 255, 0.2)",
            borderColor: "rgba(255, 99, 255, 1)",
            borderWidth: 1,
          },
        ],
      },
    });
    new Chart(this.myChart3Target, {
      type: "line",
      options: {
        plugins: {
          title: {
            display: true,
            text: "VOCT Levels",
          },
          datalabels: {
            display: function (context) {
              return context.chart.isDatasetVisible(context.datasetIndex);
          }
        },
        },
        scales: {
          x: {
            display: false,
          },
        }
      },
      data: {
        labels: data3.labels,
        datasets: [
          {
            label: "Room 1",
            data: data3.data_VOCT_1,
            backgroundColor: "rgba(3, 169, 252, 0.2)",
            borderColor: "rgba(3, 169, 252, 1)",
            borderWidth: 1,
          },
          {
            label: "Room 3",
            data: data3.data_VOCT_3,
            backgroundColor: "rgba(252, 161, 3, 0.2)",
            borderColor: "rgba(252, 161, 3, 1)",
            borderWidth: 1,
          },
          {
            label: "Room 4",
            data: data3.data_VOCT_4,
            backgroundColor: "rgba(255, 99, 255, 0.2)",
            borderColor: "rgba(255, 99, 255, 1)",
            borderWidth: 1,
          },
        ],
      },
    });
    new Chart(this.myChart4Target, {
      type: "line",
      options: {
        plugins: {
          title: {
            display: true,
            text: "HUM Levels",
          },
          datalabels: {
            display: function (context) {
              return context.chart.isDatasetVisible(context.datasetIndex);
          }
        },
        },
        scales: {
          x: {
            display: false,
          },
        }
      },
      data: {
        labels: data4.labels,
        datasets: [
          {
            label: "Room 1",
            data: data4.data_HUM_1,
            backgroundColor: "rgba(3, 169, 252, 0.2)",
            borderColor: "rgba(3, 169, 252, 1)",
            borderWidth: 1,
          },
          {
            label: "Room 3",
            data: data4.data_HUM_3,
            backgroundColor: "rgba(252, 161, 3, 0.2)",
            borderColor: "rgba(252, 161, 3, 1)",
            borderWidth: 1,
          },
          {
            label: "Room 4",
            data: data4.data_HUM_4,
            backgroundColor: "rgba(255, 99, 255, 0.2)",
            borderColor: "rgba(255, 99, 255, 1)",
            borderWidth: 1,
          },
        ],
      },
    });
  }
}
