import { Component, OnInit } from '@angular/core';
import { allBeerTypes } from '../../model/model';

@Component({
  selector: 'app-beer-form',
  templateUrl: './beer-form.component.html',
  styleUrls: ['./beer-form.component.css']
})
export class BeerFormComponent implements OnInit {

  beerTypes = allBeerTypes;
  constructor() { }

  ngOnInit() {
  }

}