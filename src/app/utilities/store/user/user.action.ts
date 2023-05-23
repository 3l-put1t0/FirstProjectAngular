import { createAction, props } from "@ngrx/store";
import { ObjJSONDatauser } from "../../interfases/obj-JSONDataUser";

export const loadIdUser = createAction('[USER] load data user', props<{data: ObjJSONDatauser}>());