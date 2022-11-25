import { Injectable } from '@angular/core';
import { Personne } from 'src/app/Model/Personne';

@Injectable({
  providedIn: 'root'
})
export class CvService {

  private personnes: Personne[] = [];

  constructor() { 
    this.personnes=[
      new Personne(0,60,'Euler',"Leonhard ","batal",'euler.jpg',11111111),
      new Personne(0,60,'Euler2',"Leonhard ","batal",'euler2.jpg',22222222),
      new Personne(0,60,'test',"test ","batal",'',22222222)
    ]
  }

  getFPersonnes(): Personne[] {
    return this.personnes;
  }

  getFPersonneById(id:number) {
    
    return this.personnes.find(
      (personne) => personne.id == id
    );
  }
}
