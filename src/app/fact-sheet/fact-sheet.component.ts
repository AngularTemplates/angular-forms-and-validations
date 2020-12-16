import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-fact-sheet',
  templateUrl: './fact-sheet.component.html',
  styleUrls: ['./fact-sheet.component.scss']
})
export class FactSheetComponent implements OnInit {


  constructor(private _Activatedroute:ActivatedRoute,
    private _router:Router) { }

  id: any;
  ngOnInit() {
    this.id=this._Activatedroute.snapshot.paramMap.get("id");

  }

}
