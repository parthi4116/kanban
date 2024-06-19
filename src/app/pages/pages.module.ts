import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { KanbonBoardComponent } from './kanbon-board/kanbon-board.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PagesComponent,
    KanbonBoardComponent,
   

  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: KanbonBoardComponent,
    }])
  ]
})
export class PagesModule { }
