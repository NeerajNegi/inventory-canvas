import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { CreateBoxDialogComponent } from './create-box-dialog/create-box-dialog.component';
import { FormsModule } from '@angular/forms';
import { GenerateSmallBoxDialogComponent } from './generate-small-box-dialog/generate-small-box-dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateBoxDialogComponent,
    GenerateSmallBoxDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
