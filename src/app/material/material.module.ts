import { NgModule } from '@angular/core';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table'


const MaterialComponents = [ 
  MatToolbarModule,
  MatSidenavModule,
  ScrollingModule,
  MatIconModule,
  MatTableModule
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
