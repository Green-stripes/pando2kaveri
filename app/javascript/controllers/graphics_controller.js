import { Controller } from "@hotwired/stimulus"
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);



export default class extends Controller {
  static targets = ['myChart'];

  connect() {
    const data = JSON.parse(this.myChartTarget.getAttribute('data-graphics-chart-data')); // Fetch data from data attribute

    new Chart(this.myChartTarget, {
      type: 'line',
      data: {
        labels: data.labels,
        datasets: [{
          label: 'CO2 Levels',
          data: data.data,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1
        }]
      },

    });
  }
}
