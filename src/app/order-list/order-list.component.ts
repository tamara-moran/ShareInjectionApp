import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DataSharingService} from '../data-sharing.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  orderList = [
    {id: 0, name: 'Macbook Pro 11 '},
    {id: 1, name: 'Macbook Air'},
    {id: 2, name: 'Macbook Pro 12.9'}
   ];

  constructor(private dataService: DataSharingService,
    private router: Router) { }

  goToDetails = (id: number) => {
    this.dataService.setOption(id);
    this.router.navigate(['detail']).then(r => {});
  }
       

  ngOnInit(): void {
  }

}
