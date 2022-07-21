import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { beersData } from '../data/beer-list';
import { Beer } from '../model/model';
import { decrease } from '../store/actions';
import { beerSelectors } from '../store/selector';

@Injectable({providedIn: 'root'})
export class BeerService {

  beers: Beer[] = beersData;

  constructor(private store: Store) {} 
  getBeerList(): Observable<Beer[]>{
    return this.store.select(beerSelectors);
  }

  
  deleteBeer(item : Beer){
    this.store.dispatch(deleteBeerAction(item.id: number ));
  }
  

  generateId(){
    const maxId = Math.max(...this.beers.map(beer => beer.id));
    return maxId +1;
  }

  addBeer(beer: Beer){
    this.beers.unshift(beer);
  }



  
}

function deleteBeerAction(): any {
throw new Error('Function not implemented.');
}
