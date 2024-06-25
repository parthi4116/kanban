import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { KanbonBoardComponent } from './kanbon-board/kanbon-board.component';
import { RouterModule } from '@angular/router';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatSortModule } from '@angular/material/sort';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';

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

    }]),
    MatSelectModule,
    NgbModule,
    FormsModule, MatSortModule,
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
