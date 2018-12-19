import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PermissionComponent } from './permission.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PermissionComponent],
  exports:[PermissionComponent]
})
export class UserPermissionModule { }
