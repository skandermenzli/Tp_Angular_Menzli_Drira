import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './cvProject/cv/cv.component';
import { DetailComponent } from './cvProject/detail/detail.component';
import { MiniWordComponent } from './mini-word/mini-word.component';

const APP_ROUTING: Routes = [
  { path: 'cv/:id', component: DetailComponent },
  { path: 'cv', component: CvComponent },
  { path: 'word', component: MiniWordComponent }
];

export const ROUTING = RouterModule.forRoot(APP_ROUTING);
