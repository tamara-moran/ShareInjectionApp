import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataSharingService} from '../data-sharing.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {

  id = 0;
  orderDetail = [
  [
    {id: 0, year: '2018', amount: 184900, units: 1400},
    {id: 1, year: '2019', amount: 164900, units: 1200},
    {id: 2, year: '2020', amount: 216900, units: 1729}
  ],
  [
    {id: 0, year: '2018', amount: 142900, units: 1467},
    {id: 1, year: '2019', amount: 128256, units: 1289},
    {id: 2, year: '2020', amount: 222498, units: 170}
  ],
  [
    {id: 0, year: '2018', amount: 182489, units: 3400},
    {id: 1, year: '2019', amount: 90769, units: 1267},
    {id: 2, year: '2020', amount: 210400, units: 1799}
  ]
  ];

  constructor(private dataSharingService: DataSharingService) { }

  ngOnInit(): void {
    this.id = this.dataSharingService.getOption();
  }

}
