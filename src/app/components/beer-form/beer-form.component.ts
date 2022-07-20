import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { allBeerTypes, BeerForm } from '../../model/model';

@Component({
  selector: 'app-beer-form',
  templateUrl: './beer-form.component.html',
  styleUrls: ['./beer-form.component.css']
})
export class BeerFormComponent implements OnInit {

  beerTypes = allBeerTypes;
  beerForm: FormGroup<BeerForm>
  constructor() { }

  ngOnInit() {
    this.beerForm = this.initForm()
  }
  private initForm(): FormGroup<BeerForm>{
    return new FormGroup<BeerForm>({
      
    }) 
  }
}