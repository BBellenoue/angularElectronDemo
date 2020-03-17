import { Item } from "../assets/model/item.schema";
import { OnInit, Component } from "@angular/core";
import { AppService } from "./app.service";

@Component({
  selector: "App",
  template: `
    <div style="text-align:center">
      <h1>Welcome to {{ title }}!</h1>
      <button (click)="addItem()" mat-raised-button>Add Item</button>
      <button (click)="deleteItem()" mat-raised-button>Delete Item</button>
      <h2>Here is the contents of the database:</h2>
      <div>
        <ul style="list-style: none">
          <li *ngFor="let item of itemList">
            {{ item.name }}
          </li>
        </ul>
      </div>
    </div>
  `
})
export class AppComponent implements OnInit {
  public readonly title = "my app";
  itemList: Item[];

  constructor(private appservice: AppService) {}

  ngOnInit(): void {
    console.log("component initialized");
    this.appservice.getItems().subscribe(items => (this.itemList = items));
  }

  addItem(): void {
    let item = new Item();
    item.name = "Item " + this.itemList.length;
    this.appservice.addItem(item).subscribe(items => (this.itemList = items));
  }

  deleteItem(): void {
    const item = this.itemList[this.itemList.length - 1];
    this.appservice
      .deleteItem(item)
      .subscribe(items => (this.itemList = items));
  }
}
