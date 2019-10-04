import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuotesListComponent } from './components/quotes-list/quotes-list.component';


const routes: Routes = [
  { path: '', redirectTo: 'quotes-list', pathMatch: 'full' },
  { path: 'quotes-list', component: QuotesListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
