import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{TestComponent} from './components/test/test.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
{ path: '', redirectTo: '/home', pathMatch: 'full' },
{path : 'test' , component : TestComponent},
{path: 'home', component : HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
