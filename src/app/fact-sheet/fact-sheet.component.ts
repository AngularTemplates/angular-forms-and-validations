import {
  Component,
  OnInit
} from '@angular/core';
import {
  ActivatedRoute,
  Router
} from '@angular/router';
import {
  Observable
} from 'rxjs';
import {
  map
} from 'rxjs/operators';
import {
  DataService
} from '../data.service';
import {
  Data
} from '../model/data.model';

import { TimelineElement } from './../horizontal-timeline/timeline-element';

import * as _ from 'lodash';


@Component({
  selector: 'app-fact-sheet',
  templateUrl: './fact-sheet.component.html',
  styleUrls: ['./fact-sheet.component.scss']
})
export class FactSheetComponent implements OnInit {
  feedbackPageno=200;
  private data: Observable < Data[] > ;
  val: any;
  timeline: TimelineElement[] = [];

  constructor(private _Activatedroute: ActivatedRoute,
    private _router: Router, private dataService: DataService) {

  }

  id: any;
  ngOnInit() {
    this.id = this._Activatedroute.snapshot.paramMap.get("id");

    this.dataService.getData().subscribe(
      res => {
        this.val = res.filter(item => item.id == this.id);
      },
      msg => console.error(`Error: ${msg.status} ${msg.statusText}`)
    );

 this.load();
  }

  name = 'Angular 6';
  content = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae
  ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae,
  ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam
  quisquam, quae, temporibus dolores porro doloribus.`;

  showFeedbackPage(){
    return this.feedbackPageno==this.id;
  }

  load() {

    this.timeline = [];
    setTimeout(() => { // simulate delay
  //     this.timeline = [
  //   {  id: 1,caption: '16 Jan', date: new Date(2014, 1, 16), title: 'Horizontal Timeline', content: this.content,url:"" },
  //   { id:1,caption: '28 Feb', date: new Date(2014, 2, 28), title: 'Status#1', content: this.content, url:""},
  //   { id: 1,caption: '20 Mar', date: new Date(2014, 3, 20), selected: true, title: 'Status#2', content: this.content, url:""},
  //  { id: 1,caption: '20 May', date: new Date(2014, 5, 20), title: 'Status#3', content: this.content,url:"" },
  //   { id: 1,caption: '09 Jul', date: new Date(2014, 7, 9), title: 'Status#4', content: this.content, url:""},
  //   {id: 2, caption: '30 Aug', date: new Date(2014, 8, 30), title: 'Status#5', content: this.content , url:""},
  //   { id: 2, caption: '15 Sep', date: new Date(2014, 9, 15), title: 'Status#6', content: this.content , url:""},
  //   { id: 2, caption: '01 Nov', date: new Date(2014, 11, 1), title: 'Status#7', content: this.content , url:""},
  //   { id: 2, caption: '10 Dec', date: new Date(2014, 12, 10), title: 'Status#8', content: this.content, url:"" },
  //   { id: 2, caption: '29 Jan', date: new Date(2015, 1, 19), title: 'Status#9', content: this.content , url:""},
  //   {id: 2,  caption: '3 Mar', date: new Date(2015, 3, 3), title: 'Status#9', content: this.content, url:"" },
  //  ];

  var setSelect=true;
    this.timeline = this.val.map(item => {
      const container = item;
      container.date = new Date(item.date);
      container.acdate = new Date(item.acdate);
     // container.content=this.content;
     // container.title="Random" + item.id;
if(setSelect){
  container.selected=setSelect;
}

      setSelect=false;
      return container;
  })
  console.log("this.timeline:",this.timeline);
  console.log("this.val:",this.val);
    }, 2000);
  }
}






