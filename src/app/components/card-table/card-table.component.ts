import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CardTableService } from 'src/app/services/card-table.service';
import { TodoModel } from 'src/app/models/test.model';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-card-table',
  templateUrl: './card-table.component.html',
  styleUrls: ['./card-table.component.css']
})
export class CardTableComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  
  testList: TodoModel[];

  data: any[] = [
    { name: 'Loading....' },

  ];

  displayedColumns: string[] = ['name', 'rarity', 'version', 'condition'];
  dataSource = new MatTableDataSource(this.data);

  constructor(private ctService: CardTableService) { }

  ngOnInit() {

    this.getList();

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getList() {
    let testListo: any;

    this.ctService.getTodoList().subscribe(response => {

      testListo = response.map(item => ({
        name: item.Name,
        rarity: item.Rarity,
        version: item.Version,
        condition: item.Conditon
      }));


      this.dataSource = new MatTableDataSource(testListo);
      this.dataSource.paginator = this.paginator;
    });



  }

}