import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card'
import { MatSelectModule } from '@angular/material/select'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatSelectModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule
  ],
  exports: [
    MatCardModule,
    MatSelectModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class MaterialModule { }
