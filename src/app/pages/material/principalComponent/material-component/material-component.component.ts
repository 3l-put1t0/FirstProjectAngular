import { Component, OnInit } from '@angular/core';
import { SemestreDataService } from 'src/app/data/material/material-data/semestre-data.service';
import { ObjSemestre } from 'src/app/utilities/interfases/obj-semestre';

@Component({
  selector: 'app-material-component',
  templateUrl: './material-component.component.html',
  styleUrls: ['./material-component.component.css']
})
export class MaterialComponentComponent implements OnInit{

  public materias!: ObjSemestre[];
  private contador: number = 0;

  constructor(private serviceDataSemesterMaterial: SemestreDataService){
    this.materias = this.serviceDataSemesterMaterial.getDataSemesterMaterial();
  }

  ngOnInit(): void{   
  }

 

  displayedColumns = [
    'id',
    'semestre',
    'id del curso',
    'curso',
    'edit',
    'delete',
  ];

  ngOnDestroy(): void{
  }
}
