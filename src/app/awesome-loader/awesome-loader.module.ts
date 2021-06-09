import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AwesomeLoaderComponent } from './awesome-loader.component';



@NgModule({
  declarations: [
    AwesomeLoaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AwesomeLoaderComponent
  ]
})
export class AwesomeLoaderModule { }
