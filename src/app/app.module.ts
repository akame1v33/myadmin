import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { SidebarModule } from './sidebar/sidebar.module';
import { NavbarModule } from './shared/navbar/navbar.module';
import  { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule,
    NavbarModule,
    NgbModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
