import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FaqComponent } from './faq/faq.component';
import { PricingComponent } from './pricing/pricing.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  // {path:'faq', component: FaqComponent},
  {path:'pricing', component: PricingComponent},
  // {path:'**', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
