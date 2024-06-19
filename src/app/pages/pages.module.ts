import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { KanbonBoardComponent } from './kanbon-board/kanbon-board.component';
import { RouterModule } from '@angular/router';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
   
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

 
@NgModule({
  declarations: [
    PagesComponent,
    KanbonBoardComponent,

  ],
  imports: [DragDropModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([{
      path: '',
      component: KanbonBoardComponent,
      
    }]),NgbModule,
     FormsModule,
     MatToolbarModule,
     MatCardModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    DragDropModule
  ]
})
export class PagesModule { }
