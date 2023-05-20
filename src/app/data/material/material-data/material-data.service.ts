import { Injectable } from '@angular/core';
import { ObjMaterial } from 'src/app/utilities/interfases/obj-material';
import { CourseDataJsonService } from './course-data-json.service';
import { ObjDataCourse } from 'src/app/utilities/interfases/obj-dataCourse';

@Injectable({
  providedIn: 'root'
})
export class MaterialDataService {

  private dataCourse!: ObjDataCourse[];
  private data!: string;

  constructor() {}

  
  public setDataJSON(data: ObjDataCourse[]):void {
    this.dataCourse = data;
  }

  public getDataMaterial(): ObjDataCourse[]{
    return this.dataCourse;
  }

  public getDataMaterialID(id: string): string{
    for(let i of this.dataCourse){
      if(id === i.id){
        this.data = i.name;
      }
    }
    return this.data;
  }
}
