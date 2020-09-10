import { HomeComponent } from './components/home/home.component';
import { BarModule } from './bar/bar.module';
import { FooModule } from './foo/foo.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'foo',
    loadChildren: () => import('./foo/foo.module').then(m => m.FooModule)
  },
  {
    path: 'bar',
    loadChildren: () => import('./bar/bar.module').then(m => m.BarModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
