import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DietService {

  constructor() { }

  public dietDetails!: string;

  public images!: string;

  public waterflag = false;

  public breakfastflag = false; 

  public lunchflag = false; 

  public eveningflag = false; 

  public dinnerflag = false; 

  public nightflag = false; 

  publicstatus : boolean = false;
}
