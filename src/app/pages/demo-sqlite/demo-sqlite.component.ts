import { Component, OnInit } from '@angular/core';
import { Item } from 'src/assets/model/item.schema';
import { SqliteTestService } from 'src/app/services/sqlite-test.service';

@Component({
  selector: 'app-demo-sqlite',
  templateUrl: './demo-sqlite.component.html',
  styleUrls: ['./demo-sqlite.component.css']
})
export class DemoSqliteComponent implements OnInit {
  itemList: Item[];

  constructor(private sqliteTestService: SqliteTestService) {}

  ngOnInit(): void {
    console.log('component initialized');
    this.sqliteTestService
      .getItems()
      .subscribe(items => (this.itemList = items));
  }

  addItem(): void {
    let item = new Item();
    item.name = 'Item ' + this.itemList.length;
    this.sqliteTestService
      .addItem(item)
      .subscribe(items => (this.itemList = items));
  }

  deleteItem(): void {
    const item = this.itemList[this.itemList.length - 1];
    this.sqliteTestService
      .deleteItem(item)
      .subscribe(items => (this.itemList = items));
  }
}
