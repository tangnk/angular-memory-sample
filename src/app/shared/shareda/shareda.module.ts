import { SharedaComponent } from './shareda/shareda.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [SharedaComponent],
  imports: [
    CommonModule
  ],
  exports: [SharedaComponent]
})
export class SharedaModule { }
