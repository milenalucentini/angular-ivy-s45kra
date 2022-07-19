import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { BeerFormComponent } from './components/beer-form/beer-form.component';
import { BeerListComponent } from './components/beer-list/beer-list.component';

const routes: Route[] = [
  {
    path: '',
    redirectTo: '/list',
    pathMatch: 'full',
  },
  {
    path: 'list',
    component: BeerListComponent,
  },
  {
    path: 'add',
    component: BeerFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
