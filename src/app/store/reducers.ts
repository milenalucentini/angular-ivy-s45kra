import { createReducer, on } from "@ngrx/store";

import { beersData } from "../data/beer-list";
import { BeerState } from "../model/state";


const initialBeerState: BeerState = {list : beersData};
export const beerReducers = createReducer(initialBeerState,
  on(delectAction,(state: BeerState, arg: {id : number}) => ({...state,list: state.list.filter((beer) =>beer.id != args.id) }))
  );


