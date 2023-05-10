import { Injectable } from '@angular/core';
import { ObjMaterial } from 'src/app/utilities/interfases/obj-material';

@Injectable({
  providedIn: 'root'
})
export class MaterialDataService {

  constructor() { }

  private dataMaterials: ObjMaterial[] =[
    {
      id: 'MA01',
      name: 'Automatización Industrial',
      active: true,
      hours: 10
    },
    {
      id: 'MA02',
      name: 'Matemáticas Especiales',
      active: true,
      hours: 6
    },
    {
      id: 'MA03',
      name: 'Calculo Integral',
      active: true,
      hours: 6
    },
    {
      id: 'MA04',
      name: 'Calculo diferencial',
      active: true,
      hours: 6
    }
  ];

  private data!: string;


  public getDataMaterial(): ObjMaterial[]{
    return this.dataMaterials;
  }

  public getDataMaterialID(id: string): string{
    for(let i of this.dataMaterials){
      if(id === i.id){
        this.data = i.name;
      }
    }
    return this.data;
  }
}
