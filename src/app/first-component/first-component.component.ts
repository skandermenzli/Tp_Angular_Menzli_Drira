import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  color = 'red';

  constructor() { }

  ngOnInit(): void {
  }

  changeColor(input: any){

    this.color = input.value;
    input.value = '';
  }

}
