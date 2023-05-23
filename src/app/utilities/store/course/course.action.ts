import { createAction, props } from "@ngrx/store";
import { ObjDataCourse } from "../../interfases/obj-dataCourse";
import { ObjCourse } from "../../interfases/obj-course";

export const loadIdCourse = createAction('[COURSE] load ID course', props<{data: ObjCourse}>());