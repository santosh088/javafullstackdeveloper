import { Component, Input, OnInit } from '@angular/core';
import { DietService } from '../diet.service';

@Component({
  selector: 'app-topic-details',
  templateUrl: './topic-details.component.html',
  styleUrls: ['./topic-details.component.css']
})
export class DietDetailsComponent implements OnInit {
  panelOpenState = false;
  title = 'appBootstrap';
    
    
  public isCollapsed = false;  
  @Input() onSelected: any;

  constructor(public _diet:DietService) { }

  ngOnInit(): void {
  }

}
