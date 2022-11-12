import { Injectable } from '@angular/core';
import { Personne } from 'src/app/Model/Personne';
import {ToastrService} from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {

  private personnes: Personne[] = [];

  constructor(private toastr: ToastrService) { }

  getPersonneEmbaucher(){
    return this.personnes;
  }

  embaucher(personne:Personne){
    if(this.personnes.includes(personne)){
      //alert(`${personne.firstname} deja embauché`)
      this.toastr.warning(`${personne.firstname} deja embauché`, 'HireFail');
    }
    else{
      this.personnes.push(personne)
      this.toastr.success(`${personne.firstname} successfully hired`, 'HireSuccess');
    }
  }

  debaucher(personne:Personne){

    const index =this.personnes.indexOf(personne);
    if (index > -1) {
      this.personnes.splice(index, 1);
   }

  }

}
