
import { createSelector } from "@ngrx/store";
import { AppState } from "../model/state";
const beerStateFunction = (sate: AppState)=> state.beerState;
export const beerSelectors = createSelector(
beerStateFunction,
(beerState:)


)