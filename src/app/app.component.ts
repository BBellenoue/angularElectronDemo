import { Component, OnInit } from "@angular/core";
import { AppService } from "./app.service";
import { Item } from "src/assets/model/item.schema";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
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
