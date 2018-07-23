import {NgModule} from '@angular/core';

import {ManagerRoutingModule} from './manager-routing.module';
import {ManagerHomeComponent} from './manager-home/manager-home.component';
import {ManagerComponent} from './manager/manager.component';
import {UserManagementComponent} from './user-management/user-management.component';
import {ReceiptLookupComponent} from './receipt-lookup/receipt-lookup.component';
import {SharedModule} from '../share/shared/shared.module';

@NgModule({
  imports: [
    ManagerRoutingModule,
    SharedModule
  ],
  declarations: [ManagerHomeComponent, ManagerComponent, UserManagementComponent, ReceiptLookupComponent]
})
export class ManagerModule {
}
