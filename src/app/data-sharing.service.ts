import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  private data = 0;

  setOption = (value: number) => {
    this.data = value;
    }
    getOption = () => {
    return this.data;
    }

  constructor() { }
}
