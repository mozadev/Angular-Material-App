import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';

import { AuthRoutingModule } from './auth-routing.module';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';



@NgModule({
  declarations: [
    RegisterPageComponent,
    LoginPageComponent,
    LayoutPageComponent,

  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,

  ]
})
export class AuthModule { }
