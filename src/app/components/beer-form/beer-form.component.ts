import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { allBeerTypes, Beer, BeerForm } from '../../model/model';
import { BeerService } from '../../services/beer.service';

@Component({
  selector: 'app-beer-form',
  templateUrl: './beer-form.component.html',
  styleUrls: ['./beer-form.component.css']
})
export class BeerFormComponent implements OnInit {

  beerTypes = allBeerTypes;
  beerForm: FormGroup<BeerForm>
  constructor(private beerService: BeerService) { }

  ngOnInit() {
    this.beerForm = this.initForm()
  }

  onSubmit(){
    const beerFromForm = this.beerForm.value;
    const beer:Beer ={
      beerName: beerFromForm.beerName!,
      beerStyle : beerFromForm.beerStyle!,
      upc: beerFromForm.upc!,
      price: beerFromForm.price!,
      createdDate : new Date(),
      lastModifiedDate : new Date(),
      id: this.beerService.generateId()
    }
    this.beerService.addBeer(beer)
  }
  private initForm(): FormGroup<BeerForm>{
    return new FormGroup<BeerForm>({
      beerName: new FormControl(null,Validators.required),
      beerStyle: new FormControl(null,Validators.required),
      upc: new FormControl(null,Validators.required),
      price: new FormControl(null,Validators.required)
    }) 
  }
}