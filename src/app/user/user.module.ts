import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { UserModule } from './user.module';
import { VestuarioComponent } from '../vestuario/vestuario.component';
import { AppComponent } from '../app.component';




@NgModule({
  
  imports: [
    CommonModule,
    BrowserModule,
    VestuarioComponent,
    UserModule
  ],
  exports: [
    declarations: [
      AppComponent
    ],
  ],
  providers [],
  bootstrap: [ VestuarioComponent]
})

export class UserModule { }
