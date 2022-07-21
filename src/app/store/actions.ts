import { createAction, props } from "@ngrx/store";
import { Beer } from "../model/model";
export const deleteBeerAction = createAction('[beer] Decrease',props<{id : number}>());
export const addBeerAction = createAction('[beer] Icrease',props<{ beer:Beer}>());



