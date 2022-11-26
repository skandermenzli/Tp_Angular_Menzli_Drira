import { RouterModule, Routes } from '@angular/router';
import { AddCvComponent } from './cvProject/add-cv/add-cv.component';
import { CvComponent } from './cvProject/cv/cv.component';
import { DetailComponent } from './cvProject/detail/detail.component';
import { LoginComponent } from './login/login.component';
import { MiniWordComponent } from './mini-word/mini-word.component';

const APP_ROUTING: Routes = [
  {path: '', component: CvComponent},
  { path: 'cv/:id', component: DetailComponent },
  { path: 'cv', redirectTo: '', pathMatch: 'full' },
  { path: 'add', component: AddCvComponent },
  { path: 'login', component: LoginComponent },
  { path: 'word', component: MiniWordComponent }
];

export const ROUTING = RouterModule.forRoot(APP_ROUTING);
