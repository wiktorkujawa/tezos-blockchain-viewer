import { NgModule } from '@angular/core';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardModule } from '@angular/material/card';


const MaterialComponents = [ 
  MatToolbarModule,
  MatSidenavModule,
  ScrollingModule,
  MatIconModule,
  MatTableModule,
  MatButtonToggleModule,
  MatSlideToggleModule,
  MatButtonModule,
  MatCardModule
 ]


@NgModule({
  declarations: [],
  imports: [
    MaterialComponents
  ],
  exports: [
    MaterialComponents
  ]
})
export class MaterialModule { }
