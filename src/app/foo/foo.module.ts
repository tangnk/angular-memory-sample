import { FormsModule } from '@angular/forms';
import { SharedaModule } from './../shared/shareda/shareda.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooComponent } from './foo/foo.component';
import { RouterModule } from '@angular/router';
import { fooRoutes } from './foo-routing.module';
import { PostListComponent } from '../components/post-list/post-list.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [FooComponent,
    PostListComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    SharedaModule,
    RouterModule.forChild(fooRoutes)
  ],
  exports: []
})
export class FooModule { }
