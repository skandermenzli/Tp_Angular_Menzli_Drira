import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  my_observable!: Observable<any>; 
  images = ['euler.jpg','euler2.jpg','default.png']
  cuurentImage :string=""

  constructor() { }

  ngOnInit(): void {

    this.my_observable = new Observable(
      (observer) => {
        let i = this.images.length -1
        setInterval(
          ()=>{
            observer.next(this.images[i])
            i--
            if(i<0){
              i = this.images.length -1
            }
          }
        ,1000)
      }
    )

    this.my_observable.subscribe(
      (result)=>{
        this.cuurentImage = result
      }
    )
  }

}
