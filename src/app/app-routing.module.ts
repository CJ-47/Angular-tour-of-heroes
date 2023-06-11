import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HttpClientModule } from '@angular/common/http';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
const routes: Routes = [ { path: 'detail/:id', component: HeroDetailComponent }, { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
{ path: 'heroes', component: HeroesComponent } , {
path: 'dashboard' , component: DashboardComponent}  ];

@NgModule({
  imports: [  HttpClientModule,RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
