import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoSqliteRoutingModule } from './demo-sqlite-routing.module';
import { DemoSqliteComponent } from './demo-sqlite.component';

@NgModule({
  declarations: [DemoSqliteComponent],
  imports: [CommonModule, DemoSqliteRoutingModule]
})
export class DemoSqliteModule {}
