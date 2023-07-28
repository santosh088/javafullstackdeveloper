import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor() { }

  public topicDetails!: string;

  public images!: string;

  public corejava = false;

  public string = false; 

  public thread = false; 

  public collection = false; 

  public java8 = false; 

  public programming = false; 

  publicstatus : boolean = false;
}
