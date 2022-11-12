import { Injectable } from '@angular/core';
import { Personne } from 'src/app/Model/Personne';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {

  private personnes: Personne[] = [];

  constructor() { }

  getPersonneEmbaucher(){
    return this.personnes;
  }

  embaucher(personne:Personne){
    if(this.personnes.includes(personne)){
      alert(`${personne.firstname} deja embauché`)
    }
    else{
      this.personnes.push(personne)
    }
  }

  debaucher(personne:Personne){

    const index =this.personnes.indexOf(personne);
    if (index > -1) {
      this.personnes.splice(index, 1);
   }

  }

}
