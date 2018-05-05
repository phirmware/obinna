import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PricingComponent } from './pricing/pricing.component';
import { FaqComponent } from './faq/faq.component';
import { ComponentsModule } from './components/components.module';
import { FlexslideComponent } from './flexslide/flexslide.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PricingComponent,
    FaqComponent,
    FlexslideComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    RouterModule.forRoot([
      {path:'faq',component:FaqComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
