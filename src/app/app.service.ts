import { Injectable } from "@angular/core";

import { ElectronService } from "ngx-electron";
import { catchError } from "rxjs/operators";
import { Observable, of } from "rxjs";
import { Item } from "src/assets/model/item.schema";

@Injectable({ providedIn: "root" })
export class AppService {
  constructor(private _electronService: ElectronService) {}

  getItems(): Observable<Item[]> {
    return of(this._electronService.ipcRenderer.sendSync("get-items")).pipe(
      catchError((error: any) => Observable.throw(error.json))
    );
  }

  addItem(item: Item): Observable<Item[]> {
    return of(
      this._electronService.ipcRenderer.sendSync("add-item", item)
    ).pipe(catchError((error: any) => Observable.throw(error.json)));
  }

  deleteItem(item: Item): Observable<Item[]> {
    return of(
      this._electronService.ipcRenderer.sendSync("delete-item", item)
    ).pipe(catchError((error: any) => Observable.throw(error.json)));
  }
}
