import { createReducer, on } from '@ngrx/store';
import { Beer } from '../model/model';
import { beersData } from '../data/beer-list';
import { BeerState } from '../model/state';
import{deleteBeerAction, addBeerAction}from'../store/actions';
const initialBeerState: BeerState = { list: beersData };
export const beerReducers = createReducer(
  initialBeerState,
  on(deleteBeerAction, (state: BeerState, arg: { id: number }) => ({
    ...state,
    list: state.list.filter((beer) => beer.id != arg.id),
  }))
);

export const addReducers = createReducer(
  initialBeerState,
  on(addBeerAction, (state: BeerState, arg: { beer: Beer }) => ({
    ...state,
    list: pushBeer(state, arg.beer),
  }))
);
