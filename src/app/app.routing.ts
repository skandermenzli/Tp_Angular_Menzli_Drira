import {RouterModule, Routes} from "@angular/router";
import {CvComponent} from "./cvProject/cv/cv.component";


const APP_ROUTING : Routes = [
  {path : 'cv' , component : CvComponent },
]


export const ROUTING = RouterModule.forRoot(APP_ROUTING)
