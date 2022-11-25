import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { CvComponent } from './cvProject/cv/cv.component';
import { ListCvComponent } from './cvProject/list-cv/list-cv.component';
import { ItemCvComponent } from './cvProject/item-cv/item-cv.component';
import { DetailCvComponent } from './cvProject/detail-cv/detail-cv.component';
import { FormCvComponent } from './cvProject/form-cv/form-cv.component';
import { FormsModule } from '@angular/forms';
import { MiniWordComponent } from './mini-word/mini-word.component';
import { RainbowDirective } from './directives/rainbow.directive';
import { DefaultImagePipe } from './pipes/default-image.pipe';
import { EmbaucheComponent } from './cvProject/embauche/embauche.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";
import {ROUTING} from "./app.routing";
import { HeaderComponent } from './header/header.component';
import { RouterSimulatorComponent } from './router-simulator/router-simulator.component';
import { DetailComponent } from './cvProject/detail/detail.component';






@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    CvComponent,
    ListCvComponent,
    ItemCvComponent,
    DetailCvComponent,
    FormCvComponent,
    MiniWordComponent,
    RainbowDirective,
    DefaultImagePipe,
    EmbaucheComponent,
    HeaderComponent,
    RouterSimulatorComponent,
    DetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ROUTING,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
