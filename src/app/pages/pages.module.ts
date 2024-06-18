import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { KanbonBoardComponent } from './kanbon-board/kanbon-board.component';



@NgModule({
  declarations: [
    PagesComponent,
    KanbonBoardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
