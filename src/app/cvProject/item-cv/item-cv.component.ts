import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personne } from 'src/app/Model/Personne';

@Component({
  selector: 'app-item-cv',
  templateUrl: './item-cv.component.html',
  styleUrls: ['./item-cv.component.css']
})
export class ItemCvComponent implements OnInit {

  @Input()
  personne!: Personne;

  @Output() selectedpersonne=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  selectpersonne(){

    this.selectedpersonne.emit(this.personne);

  }
}
