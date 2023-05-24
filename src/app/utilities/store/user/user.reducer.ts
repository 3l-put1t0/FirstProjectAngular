import { createReducer, on } from "@ngrx/store";
import { ObjJSONDatauser } from "../../interfases/obj-JSONDataUser";
import { loadIdUser } from "./user.action";

const initialState: ObjJSONDatauser = {
    data: {
        id: '',
        name: '',
        lastName: '',
        password: '',
        rol: '',
        active: false,
        age: 18,
        courseID: []
    }
};

export const userReducer = createReducer(
    initialState,
    on(loadIdUser, (_state, { data }) => data),
);

