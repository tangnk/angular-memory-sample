import { PostItemComponent } from './../components/post-list/post-item/post-item.component';
import { SharedbModule } from './../shared/sharedb/sharedb.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarComponent } from './bar/bar.component';
import { RouterModule } from '@angular/router';
import { barRoutes } from './bar-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [BarComponent, PostItemComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(barRoutes)
  ],
  exports: [BarComponent]
})
export class BarModule { }
