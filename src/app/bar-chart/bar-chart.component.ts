// bar-chart.component.ts
import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  barChart: any;
  pieChart: any;
  doughnutChart: any;
  lineChart: any;
  polarChart: any;
  radarChart?: Chart<"radar", number[], string>;

  ngOnInit(): void {
    this.createBarChart();
    this.createPieChart();
    this.createDoughnutChart();
    this.createLineChart();
    this.createPolarChart();
    this.createRadarChart();
  }

  createBarChart(): void {
    this.barChart = new Chart('barChart', {
      type: 'bar',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [{
          label: 'Monthly Sales',
          data: [10, 25, 15, 30, 20],
          backgroundColor: 'rgba(75, 192, 192, 0.7)',
          borderColor: 'rgba(75, 192, 192, 1)',
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

  createPieChart() {
    this.pieChart = new Chart("pieChart", {
      type: 'pie',
      data: {
        labels: ['Category 1', 'Category 2', 'Category 3'],
        datasets: [{
          data: [30, 50, 20],
          backgroundColor: ['rgba(255, 99, 132, 0.7)', 'rgba(54, 162, 235, 0.7)', 'rgba(255, 206, 86, 0.7)'],
          hoverBackgroundColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
        }]
      },
      options: {
        responsive: true
      }
    })
  }

  createDoughnutChart() {
    this.doughnutChart = new Chart('doughnutChart', {
      type: 'doughnut',
      data: {
        labels: ['Category 1', 'Category 2', 'Category 3'],
        datasets: [{
          data: [30, 50, 20],
          backgroundColor: ['rgba(255, 99, 132, 0.7)', 'rgba(54, 162, 235, 0.7)', 'rgba(255, 206, 86, 0.7)'],
          hoverBackgroundColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
        }]
      },
      options: {
        responsive: true
      }
    });
  }

  createLineChart(): void {
    this.lineChart = new Chart('lineChart', {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [{
          label: 'Monthly Sales',
          data: [10, 25, 15, 30, 20],
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 2,
          fill: false
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  createPolarChart(): void {
    this.polarChart = new Chart('polarChart', {
      type: 'polarArea',
      data: {
        labels: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'],
        datasets: [{
          data: [30, 50, 20, 40, 60],
          backgroundColor: [
            'rgba(255, 99, 132, 0.7)',
            'rgba(54, 162, 235, 0.7)',
            'rgba(255, 206, 86, 0.7)',
            'rgba(75, 192, 192, 0.7)',
            'rgba(153, 102, 255, 0.7)'
          ],
          hoverBackgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)'
          ],
        }]
      },
      options: {
        responsive: true
      }
    });
  }

  createRadarChart(): void {
    this.radarChart = new Chart('radarChart', {
      type: 'radar',
      data: {
        labels: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'],
        datasets: [{
          label: 'Dataset 1',
          data: [30, 50, 20, 40, 60],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 2,
          pointRadius: 5,
          pointBackgroundColor: 'rgba(255, 99, 132, 1)',
          pointBorderColor: '#fff',
          pointHoverRadius: 8,
          pointHoverBackgroundColor: 'rgba(255, 99, 132, 1)',
          pointHoverBorderColor: '#fff'
        }]
      },
      options: {
        responsive: true
      }
    });
  }
  
}
