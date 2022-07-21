import { createReducer, on } from "@ngrx/store";

import { beersData } from "../data/beer-list";
import { BeerState } from "../model/state";


const initialBeerState: BeerState = {list : beersData};
export const beerReducers = createReducer(initialBeerState,
  on(Actions.decrease,(state) => ({...state,count: state.count-1}))
  );


