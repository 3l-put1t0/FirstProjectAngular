import { createReducer, on } from "@ngrx/store";
import { ObjDataCourse } from "../../interfases/obj-dataCourse";
import { loadIdCourse } from "./course.action";
import { ObjCourse } from "../../interfases/obj-course";

const initialState: ObjCourse = {
    data: {
        id: '',
        name: ''
    }
};

export const courseReducer = createReducer(
    initialState,
    on(loadIdCourse, (_state, { data }) => data),
);