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
      new Personne(1,60,'Euler2',"Leonhard ","batal",'euler2.jpg',22222222),
      new Personne(2,60,'test',"test ","batal",'',22222222)
    ]
  }

  getFPersonnes(): Personne[] {
    return this.personnes;
  }

  getFPersonneById(id:number) {
    const personne = this.personnes.find(
      (personne) => personne.id == id
    );
    console.log(personne) ;
    return personne ;
  }

  delete(id: number) {
      //this.personnes.pop(this.getFPersonneById(id))
      this.personnes = this.personnes.filter((p)=>(p.id!=id))

  }
}
