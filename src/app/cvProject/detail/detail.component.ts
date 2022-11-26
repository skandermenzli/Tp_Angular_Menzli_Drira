import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personne } from 'src/app/Model/Personne';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  personne!: Personne;

  constructor(
    private activatedRoute: ActivatedRoute,
    private cvService: CvService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
        console.log("params : " ,params['id']);

        // @ts-ignore
        this.personne = this.cvService.getFPersonneById(params['id'])
      }
    );
  }


  deletePersonne() {
        this.activatedRoute.params.subscribe(
          (params) => {
            this.cvService.delete(params['id']);
          }
        );
        this.router.navigate(['cv'])
  }

}
