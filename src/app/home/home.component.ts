import { Component,OnInit } from '@angular/core';
import Chart from 'chart.js/auto'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  constructor(){}

  ngOnInit() {
    //graficos
    const ctx = document.getElementById('myChart');

    new Chart('mychart', {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: 'vendas',
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 2
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

    const cty = document.getElementById('Chart');

    new Chart('chart', {
      type: 'line',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: 'Comissão',
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 2
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
