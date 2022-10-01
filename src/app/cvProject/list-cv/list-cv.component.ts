import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personne } from 'src/app/Model/Personne';

@Component({
  selector: 'app-list-cv',
  templateUrl: './list-cv.component.html',
  styleUrls: ['./list-cv.component.css']
})
export class ListCvComponent implements OnInit {

  @Input() personnes: Personne[] = [];
  @Output() selectedpersonne=new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  selectpersonne(selectedpersonne: any){
    this.selectedpersonne.emit(selectedpersonne)
    console.log(selectedpersonne);

  }
}
