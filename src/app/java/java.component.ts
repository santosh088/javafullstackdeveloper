import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TopicService } from '../topic.service';
import { style, transition, trigger,animate } from '@angular/animations';

@Component({
  selector: 'app-java',
  templateUrl: './java.component.html',
  styleUrls: ['./java.component.css'],
  animations: [
    trigger('slidein', [
      transition(':enter', [
        // when ngif has true
        style({ transform: 'translateX(-100%)' }),
        animate(250, style({ transform: 'translateX(0)' }))
      ]),
      transition(':leave', [
        // when ngIf has false
        animate(250, style({ transform: 'translateX(-100%)' }))
      ])
    ])
  ]
})

export class WeightlossComponent implements OnInit {

  @Output() displayMessage:any;
  @Output() onSelected = new EventEmitter<any>();
  expanded: boolean = true;

 

  constructor(private _topic:TopicService) { 
  }

  ngOnInit(): void {
    this.selectTopic('CORE JAVA');
  }
  topics = [
    { name: 'CORE JAVA' },
    { name: 'STRING' },
    {  name: 'MULTITHREADING' },
    {  name: 'COLLECTION' },
    {  name: 'JAVA 8' },
    {  name: 'BASIC PROGRAMMING' },
    {  name: 'Angular' },
    {  name: 'Design Pattern' },
    {  name: 'INTERVIEW QnA' }
    ];
  
    selectTopic(topic:any){
    if(topic == 'CORE JAVA'){
      this._topic.images = "water-image";
      this._topic.corejava = true;
      this._topic.string = false;
      this._topic.thread = false;
      this._topic.collection = false;
      this._topic.java8 = false;
      this._topic.programming = false;
      this._topic.QnA = false;

    } else if(topic == 'STRING'){
      this._topic.corejava = false;
      this._topic.string = true;
      this._topic.thread = false;
      this._topic.collection = false;
      this._topic.java8 = false;
      this._topic.programming = false;
      this._topic.QnA = false;
    } else if(topic == 'COLLECTION'){
      this._topic.corejava = false;
      this._topic.string = false;
      this._topic.thread = false;
      this._topic.collection = true;
      this._topic.java8 = false;
      this._topic.programming = false;
      this._topic.QnA = false;
    } else if(topic == 'MULTITHREADING'){
      this._topic.corejava = false;
      this._topic.string = false;
      this._topic.thread = true;
      this._topic.collection = false;
      this._topic.java8 = false;
      this._topic.programming = false;
      this._topic.QnA = false;
    } else if(topic == 'JAVA 8'){
      this._topic.corejava = false;
      this._topic.string = false;
      this._topic.thread = false;
      this._topic.collection = false;
      this._topic.java8 = true;
      this._topic.programming = false;
      this._topic.QnA = false;
    }
   else if(topic == 'BASIC PROGRAMMING'){
    this._topic.corejava = false;
    this._topic.string = false;
    this._topic.thread = false;
    this._topic.collection = false;
    this._topic.java8 = false;
    this._topic.programming = true;
    this._topic.QnA = false;
   }
   else if(topic == 'INTERVIEW QnA'){
    this._topic.corejava = false;
    this._topic.string = false;
    this._topic.thread = false;
    this._topic.collection = false;
    this._topic.java8 = false;
    this._topic.programming = false;
    this._topic.QnA = true;
   }
   else if(topic == 'Angular'){
    this._topic.corejava = false;
    this._topic.string = false;
    this._topic.thread = false;
    this._topic.collection = false;
    this._topic.java8 = false;
    this._topic.programming = false;
    this._topic.QnA = false;
    this._topic.angular = true;
    this._topic.design = false;
   }
   else if(topic == 'Design Pattern'){
    this._topic.corejava = false;
    this._topic.string = false;
    this._topic.thread = false;
    this._topic.collection = false;
    this._topic.java8 = false;
    this._topic.programming = false;
    this._topic.QnA = false;
    this._topic.angular = false;
    this._topic.design = true;
   }
   else {
    this._topic.corejava = false;
    this._topic.string = false;
    this._topic.thread = false;
    this._topic.collection = false;
    this._topic.java8 = false;
    this._topic.programming = false;
    this._topic.QnA = false;
   }
}

}
