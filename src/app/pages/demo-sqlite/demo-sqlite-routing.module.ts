import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoSqliteComponent } from './demo-sqlite.component';

const routes: Routes = [
  {
    path: '',
    component: DemoSqliteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoSqliteRoutingModule {}
