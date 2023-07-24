import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  lat = 13.004830;
  lng = 77.684900;

  constructor() { }

  ngOnInit(): void {
  }

}
