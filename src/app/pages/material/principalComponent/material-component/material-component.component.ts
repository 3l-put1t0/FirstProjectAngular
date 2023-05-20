import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CourseDataJsonService } from 'src/app/data/material/material-data/course-data-json.service';
import { MaterialDataService } from 'src/app/data/material/material-data/material-data.service';
import { SemestreDataService } from 'src/app/data/material/material-data/semestre-data.service';
import { ObjDataCourse } from 'src/app/utilities/interfases/obj-dataCourse';
import { ObjSemestre } from 'src/app/utilities/interfases/obj-semestre';
import { ObjUsers } from 'src/app/utilities/interfases/obj-users';

@Component({
  selector: 'app-material-component',
  templateUrl: './material-component.component.html',
  styleUrls: ['./material-component.component.css']
})
export class MaterialComponentComponent implements OnInit {

  public materias!: ObjDataCourse[];
  private dataCourse!: ObjDataCourse[];
  private contador: number = 0;
  private suscripton!: Subscription;

  constructor(private courseDataService: MaterialDataService,
    private dataJSON: CourseDataJsonService) {      
  }

  ngOnInit(): void {
    this.suscripton = this.dataJSON.getDataJSON().subscribe(
      (r: ObjDataCourse[]) => {
        this.materias = r,
        this.courseDataService.setDataJSON(this.materias)     

      });
  }



  displayedColumns = [
    'id',
    'name',
    'edit',
    'delete',
  ];

  ngOnDestroy(): void {
    this.suscripton.unsubscribe();
  }
}
