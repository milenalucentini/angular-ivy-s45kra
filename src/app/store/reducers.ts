import { createReducer, on } from '@ngrx/store';
import { Beer } from '../model/model';
import { beersData } from '../data/beer-list';
import { BeerState } from '../model/state';

import * as Actions from '../store/actions';

const initialBeerState: BeerState = { list: beersData };
export const beerReducers = createReducer(
  initialBeerState,
  on(Actions.deleteBeerAction, (state: BeerState, arg: { id: number }) => ({
    ...state,
    list: state.list.filter((beer) => beer.id != arg.id),
  })),
  on(Actions.addBeerAction, (state: BeerState, arg: { beer: Beer }) => ({
    ...state,
    list: addBeer(state, arg.beer),
  }))
);
function addBeer(beerState: BeerState, beer: Beer){
  let beers:Beer[] = beerState.list;
  beers=[...beers];
  beers.unshift(beer);
  return beers;

}