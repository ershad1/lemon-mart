import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerRoutingModule } from './manager-routing.module';
import { ManagerHomeComponent } from './manager-home/manager-home.component';
import { ManagerComponent } from './manager/manager.component';
import {MaterialModule} from '../share/material/material.module';
import { UserManagementComponent } from './user-management/user-management.component';
import { ReceiptLookupComponent } from './receipt-lookup/receipt-lookup.component';

@NgModule({
  imports: [
    CommonModule,
    ManagerRoutingModule,
    MaterialModule
  ],
  declarations: [ManagerHomeComponent, ManagerComponent, UserManagementComponent, ReceiptLookupComponent]
})
export class ManagerModule { }
