import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/Model/Personne';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  personnes: Personne[] = [];
  selectedpersonne!:Personne;
  formIsHidden :boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.personnes=[
      new Personne(0,60,'Euler',"Leonhard ","batal",'euler.jpg',11111111),
      new Personne(0,60,'Euler2',"Leonhard ","batal",'euler2.jpg',22222222)
    ]
  }

  selectpersonne(personne: Personne){
    this.selectedpersonne=personne;
  }

  showform(){
    this.formIsHidden = !this.formIsHidden;
  }
  
}
