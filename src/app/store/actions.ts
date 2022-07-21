import { createAction, props } from "@ngrx/store";
export const deleteBeerAction = createAction('[beer] Decrease',props<{id : number}>()
export const addBeerAction = createAction('[beer] Icrease',props<{id : number}>()
);


