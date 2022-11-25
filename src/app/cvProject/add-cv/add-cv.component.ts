import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-add-cv',
  templateUrl: './add-cv.component.html',
  styleUrls: ['./add-cv.component.css']
})
export class AddCvComponent implements OnInit {

  constructor(
    private cvService: CvService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  addPersonne(formumaire: NgForm) {
    this.cvService.addPersonne(formumaire.value)
    this.router.navigate(['cv'])
  }

}
