// import { Controller } from "@hotwired/stimulus"
// import { Chart, registerables } from "chart.js";
// Chart.register(...registerables);

// // Connects to data-controller="graphics"
// export default class extends Controller {
//     static targets = ['myChart', 'time', 'reading'];

//     canvasContext() {
//         return this.myChartTarget.getContext('2d');
//     }

//     connect() {
//       new Chart(this.canvasContext(), {
//           type: 'line',
//           data: {
//               labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//               datasets: [{
//                   label: '# of Votes',
//                   // data: [12, 19, 3, 5, 2, 3],
//                   backgroundColor: [
//                       'rgba(255, 99, 132, 0.2)',
//                       'rgba(54, 162, 235, 0.2)',
//                       'rgba(255, 206, 86, 0.2)',
//                       'rgba(75, 192, 192, 0.2)',
//                       'rgba(153, 102, 255, 0.2)',
//                       'rgba(255, 159, 64, 0.2)'
//                   ],
//                   borderColor: [
//                       'rgba(255, 99, 132, 1)',
//                       'rgba(54, 162, 235, 1)',
//                       'rgba(255, 206, 86, 1)',
//                       'rgba(75, 192, 192, 1)',
//                       'rgba(153, 102, 255, 1)',
//                       'rgba(255, 159, 64, 1)'
//                   ],
//                   borderWidth: 1
//               }]
//           },
//           options: {
//               scales: {
//                   y: {
//                       beginAtZero: true
//                   }
//               }
//           }
//       });
//   }
// }

// import { Controller } from "@hotwired/stimulus";
// import { Chart } from "chart.js";

// export default class extends Controller {
//   static targets = ['myChart', 'time', 'reading'];

//   canvasContext() {
//     return this.myChartTarget.getContext('2d');
//   }

//   connect() {
//     const data = this.myChartTarget.dataset.chartData; // Fetch data from data attribute
//     const parsedData = JSON.parse(data); // Parse JSON data
// debugger;
//     new Chart(this.canvasContext(), {
//       type: 'line',
//       data: {
//         labels: JSON.parse(this.timeTarget), // Use the labels from the parsed data
//         datasets: [{
//           label: JSON.parse(this.timeTarget),
//           data: JSON.parse(this.levelTarget), // Use the data from the parsed data
//           // backgroundColor: parsedData.backgroundColor,
//           borderColor: parsedData.borderColor,
//           borderWidth: parsedData.borderWidth
//         }]
//       },

      // options: {
      //   scales: {
      //     y: {
      //       beginAtZero: true
      //     }
        // }
      // }
//     });
//   }
// }

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
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
