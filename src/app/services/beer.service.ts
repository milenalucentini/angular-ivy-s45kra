import { Injectable } from '@angular/core';
import { beersData } from '../data/beer-list';
import { Beer } from '../model/model';

@Injectable({providedIn: 'root'})
export class BeerService {

  private beers: Beer[] = beersData;

  constructor() {} 
  getBeerList(){
    return this.beers;
  }
  deleteBeer(item : Beer){
    this.beers = this.beers.filter(beer => beer.id != item.id)
  }



  
}