import { Component, Input, OnInit } from '@angular/core';
import { Beer } from '../../model/model';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})
export class BeerComponent implements OnInit {
@Input() beer : Beer
  constructor() { }

  ngOnInit() {
  }

}