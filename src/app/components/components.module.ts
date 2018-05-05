import { FaqComponent } from './../faq/faq.component';
import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { GoTopComponent } from "./go-top/go-top.component";
import { ModalComponent } from "./modal/modal.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      
      {path:'faq',component:FaqComponent}
    ])
  ],
  declarations: [
    NavbarComponent,
    FooterComponent,
    GoTopComponent,
    ModalComponent
  ],
  exports: [FooterComponent, NavbarComponent, GoTopComponent, ModalComponent]
})
export class ComponentsModule {}
