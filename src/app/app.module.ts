import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { SidebarModule } from './sidebar/sidebar.module';
import { NavbarModule } from './shared/navbar/navbar.module';
import  { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserPermissionModule } from './permission/permission.module';
import { FileChooserComponent } from './generic-component/file-chooser/file-chooser.component';
import { ImageCompressorService } from './services/image-compressor.service';
import { Ng2ImgMaxModule } from 'ng2-img-max';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    FileChooserComponent,
  ],
  imports: [
    UserPermissionModule,
    BrowserModule,
    AppRoutingModule,
    SidebarModule,
    NavbarModule,
    NgbModule.forRoot(),
    FormsModule,
    Ng2ImgMaxModule
  ],
  providers: [ImageCompressorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
