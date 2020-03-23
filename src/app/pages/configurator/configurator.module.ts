import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfiguratorComponent } from './configurator.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ConfiguratorRoutingModule } from './configurator-router.module';

@NgModule({
  declarations: [ConfiguratorComponent],
  imports: [CommonModule, ConfiguratorRoutingModule, SharedModule]
})
export class ConfiguratorModule {}
