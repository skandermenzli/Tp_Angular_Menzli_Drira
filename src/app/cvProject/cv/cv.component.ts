import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/Model/Personne';
import { CvService } from '../services/cv.service';


@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  personnes: Personne[] = [];
  selectedpersonne!:Personne;
  formIsHidden :boolean = true;

  constructor(private cvService :CvService) { }

  ngOnInit(): void {
    this.personnes = this.cvService.getFPersonnes();
  }

  selectpersonne(personne: Personne){
    this.selectedpersonne=personne;
  }

  showform(){
    this.formIsHidden = !this.formIsHidden;
  }
  
}
