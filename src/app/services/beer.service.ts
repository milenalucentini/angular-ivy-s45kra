import { Injectable } from '@angular/core';
import { beersData } from '../data/beer-list';
import { Beer } from '../model/model';

@Injectable({providedIn: 'root'})
export class BeerService {

  beers: Beer[] = beersData;

  constructor() {} 
  getBeerList(){
    return this.beers;
  }
  deleteBeer(item : Beer){
    this.beers = this.beers.filter(beer => beer.id != item.id)
  }

  generateId(){
    const maxId = Math.max(...this.beers.map(beer => beer.id));
    return maxId +1;
  }

  addBeer(beer: Beer){
    this.beers.unshift(beer);
  }



  
}