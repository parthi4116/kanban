import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
 import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyCheckboxModule as MatCheckboxModule } from '@angular/material/legacy-checkbox';
 

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        redirectTo: 'auth/login',
        pathMatch: 'full'
      },
      {
        path: 'auth/login',
        component: LoginComponent,
        data: { returnUrl: window.location.pathname }
      },
      {
        path: 'auth/registration',
        component: RegisterComponent
      },]
  }]
@NgModule({
  declarations: [
    AuthComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    ToastrModule,
    MatToolbarModule,
    MatInputModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthModule { }
