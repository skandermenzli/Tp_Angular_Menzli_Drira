import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mini-word',
  templateUrl: './mini-word.component.html',
  styleUrls: ['./mini-word.component.css']
})
export class MiniWordComponent implements OnInit {

  color = 'blue';
  size = 24;
  font = 'Garamond';
  simple = true;
  ocean = false


  constructor() { }

  ngOnInit(): void {
  }

   changeTheme(){

    this.ocean = !this.ocean
    this.simple = !this.simple

  }

}
