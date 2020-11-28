import { NgModule } from '@angular/core';
import { CardTableComponent } from './card-table/card-table.component';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table'
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';



@NgModule({
  declarations: [
    CardTableComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule
    
  ],
  exports: [
    CardTableComponent
  ],
})
export class CardModule { }
