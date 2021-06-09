import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AwesomeLoaderModule } from '@bit/swaraj.awesome-components.awesome-loader';
import { AwesomeClearDataComponent } from './awesome-clear-data.component';

@NgModule({
  declarations: [
    AwesomeClearDataComponent
  ],
  imports: [
    CommonModule,
    AwesomeLoaderModule
  ],
  exports: [
    AwesomeClearDataComponent
  ]
})
export class AwesomeClearDataModule { }
