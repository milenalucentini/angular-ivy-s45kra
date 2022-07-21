import { createReducer, on } from '@ngrx/store';

import { beersData } from '../data/beer-list';
import { BeerState } from '../model/state';
import { addBeerAction,deleteBeerAction } from './actions';

const initialBeerState: BeerState = { list: beersData };
export const beerReducers = createReducer(
  initialBeerState,
  on(Action.deleteBeerAction, (state: BeerState, arg: { id: number }) => ({
    ...state,
    list: state.list.filter((beer) => beer.id != arg.id),
  }))
);

export const addReducers = createReducer(
  initialBeerState,
  on(Action.addBeerAction, (state: BeerState, arg: { beer: Beer }) => ({
    ...state,
    list: pushBeer(state, arg.beer),
  }))
);
