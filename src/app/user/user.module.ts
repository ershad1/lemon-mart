import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserRoutingModule} from './user-routing.module';
import {ProfileComponent} from './profile/profile.component';
import {LogoutComponent} from './logout/logout.component';
import {NavigationMenuComponent} from './navigation-menu/navigation-menu.component';
import {SharedModule} from '../share/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ],
  declarations: [ProfileComponent, LogoutComponent, NavigationMenuComponent]
})
export class UserModule {
}
