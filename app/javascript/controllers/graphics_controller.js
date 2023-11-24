
import { Controller } from "@hotwired/stimulus";
import { Chart } from "chart.js";

export default class extends Controller {
  static targets = ['myChart'];

  connect() {
    const data = JSON.parse(this.myChartTarget.getAttribute('data-graphics-chart-data')); // Fetch data from data attribute
    debugger
    new Chart(this.myChartTarget, {
      type: 'line',
      data: {
        labels: data.labels,
        datasets: [{
          label: 'CO2 Levels',
          data: data.data,
          // backgroundColor: 'rgba(255, 99, 132, 0.2)',
          // borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          x: {
              type: 'time',
              time: {
                  unit: 'millisecond'
              }
          }
      }
  }
      }
    );
  }
}
