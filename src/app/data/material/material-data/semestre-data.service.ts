import { Injectable } from '@angular/core';
import { ObjSemestre } from 'src/app/utilities/interfases/obj-semestre';
import { MaterialDataService } from './material-data.service';

@Injectable({
  providedIn: 'root'
})
export class SemestreDataService {

  constructor(private serviceDataMaterial: MaterialDataService) { }

  private dataSemester: ObjSemestre[] = [
    {
      id: 'S01',
      semestre: 1,
      courseId: ['MA03', 'MA04']
    },
    {
      id: 'S02',
      semestre: 2,
      courseId: ['MA02', 'MA01']
    }
  ]

  private semester!: ObjSemestre;

  public getDataSemester(): ObjSemestre[]{
    return this.dataSemester;
  }

  public getDataSemesterId(id: string): ObjSemestre{   

    for(let i of this.dataSemester){
      if(i.id === id ){
        this.semester = i;
      }
    }      
    return this.semester;
  }
}
