import { Component, OnInit } from '@angular/core';
import {Credit} from '../model/credit';
import {CreditserviceService} from '../services/creditservice.service';
import {Bank} from '../model/bank';
import {HttpErrorResponse} from '@angular/common/http';
import {Label, MultiDataSet} from 'ng2-charts';
import {ChartType} from 'chart.js';

@Component({
  selector: 'app-creditsimulation',
  templateUrl: './creditsimulation.component.html',
  styleUrls: ['./creditsimulation.component.css']
})
export class CreditsimulationComponent implements OnInit {
  credit: Credit;
  Stats: Map<string, number>;
  v1: number;
  doughnutChartLabels: Label[] = ['BT', 'BH', 'Attijari Bank', 'Amen Bank', 'Banque Zitouna', 'STB', 'BNA', 'UIB', 'BFPME'];
  doughnutChartData: MultiDataSet = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
  doughnutChartType: ChartType = 'doughnut';

  constructor(private creditService: CreditserviceService) { }

  ngOnInit(): void {
    this.credit = new Credit();
    this.v1 =0;
    this.Statistics();
  }
  calcul() {
    this.creditService.addcredit(this.credit).subscribe((response: Credit) => {this.credit = response;},
      (error: HttpErrorResponse) => {alert(error.message);});
  }
  Statistics(){
    this.creditService.stat().subscribe((response: Map<string, number>) => {this.Stats = response;},
      (error: HttpErrorResponse) => {alert(error.message);});

    this.doughnutChartData = [[this.Stats.get('BT'), this.Stats.get('BH'), this.Stats.get('Attijari Bank'),
      this.Stats.get('Amen Bank'), this.Stats.get('Banque Zitouna'), this.Stats.get('STB'), this.Stats.get('BNA'),
      this.Stats.get('UIB'), this.Stats.get('BFPME')]];

    this.v1 = this.Stats.get(`BT`);

  }
}
