import { SharedbComponent } from './sharedb/sharedb.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [SharedbComponent],
  imports: [
    CommonModule
  ],
  exports: [SharedbComponent]
})
export class SharedbModule { }
