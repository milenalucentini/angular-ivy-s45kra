import { Injectable } from '@angular/core';
import { beersData } from '../data/beer-list';

@Injectable({providedIn: 'root'})
export class BeerService {

  constructor() {} 
  getBeerList(){
    return beersData;
  }
  
}