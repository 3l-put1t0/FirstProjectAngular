import { createSelector } from "@ngrx/store"
import { AppState } from "../app.reducer"
import { ObjJSONDatauser } from "../../interfases/obj-JSONDataUser";

export const userStateSelector = (appState: AppState) => (appState.userState)


export const userSelector = createSelector(
    userStateSelector,
    (userState: ObjJSONDatauser) => userState
);