import { createReducer } from "@ngrx/store";
import { ActionReducer } from "@ngrx/store/src";
import { beersData } from "../data/beer-list";
import { BeerState } from "../model/state";

const initialBeerState: BeerState = {list : beersData};
export const beerReducers = createReducer(initialBeerState);
