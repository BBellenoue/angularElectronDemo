import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NgxElectronModule, ElectronService } from "ngx-electron";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NgxElectronModule],
  providers: [ElectronService],
  bootstrap: [AppComponent]
})
export class AppModule {}
