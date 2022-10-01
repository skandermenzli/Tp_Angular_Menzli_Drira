import { Component, Input, OnInit, Output } from '@angular/core';
import { Personne } from 'src/app/Model/Personne';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-form-cv',
  templateUrl: './form-cv.component.html',
  styleUrls: ['./form-cv.component.css']
})
export class FormCvComponent implements OnInit {

  @Input() personne!: Personne;
  @Output() personneChange!: Personne;

  constructor() { }

  ngOnInit(): void {
  }

  changeAttribute(firstname:any){
    console.log(firstname.id);
    console.log(this.personne);
    
    
    this.personne.firstname = firstname.value;
    

  }

}
