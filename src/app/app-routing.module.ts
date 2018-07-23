import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {LoginComponent} from './login/login/login.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'manager', loadChildren: './manager/manager.module#ManagerModule'},
  // {path: 'user', loadChildren: 'app/user/user.module#UserModule'},
  {path: 'user', loadChildren: './user/user.module#UserModule'},
  {path: 'pos', loadChildren: './pos/pos.module#PosModule'},
  {path: 'login', component: LoginComponent},
  {path: 'login/:redirectUrl', component: LoginComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
