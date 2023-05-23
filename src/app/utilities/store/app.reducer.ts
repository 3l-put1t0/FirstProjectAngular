import { ActionReducerMap } from "@ngrx/store";
import { ObjDataCourse } from "../interfases/obj-dataCourse";
import { courseReducer } from "./course/course.reducer";
import { ObjCourse } from "../interfases/obj-course";
import { ObjJSONDatauser } from "../interfases/obj-JSONDataUser";
import { userReducer } from "./user/user.reducer";


export interface AppState{
    courseState: ObjCourse,
    userState: ObjJSONDatauser
}

export const appReducer: ActionReducerMap<AppState> = {
    courseState: courseReducer,
    userState: userReducer
}