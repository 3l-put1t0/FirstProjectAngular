import { createSelector } from "@ngrx/store";
import { AppState } from "../app.reducer";
import { ObjDataCourse } from "../../interfases/obj-dataCourse";
import { ObjCourse } from "../../interfases/obj-course";

export const courseStateSelector = (appState: AppState) => (appState.courseState);

export const courseSelector = createSelector(
    courseStateSelector,
    (courseState: ObjCourse) => courseState 
); 