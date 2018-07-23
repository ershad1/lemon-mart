import { NgModule } from '@angular/core';

import { InventoryRoutingModule } from './inventory-routing.module';
import {SharedModule} from '../share/shared/shared.module';
import { InventoryComponent } from './inventory/inventory.component';
import { InventoryDashboardComponent } from './inventory-dashboard/inventory-dashboard.component';
import { StockEntryComponent } from './stock-entry/stock-entry.component';
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';

@NgModule({
  imports: [
    InventoryRoutingModule,
    SharedModule
  ],
  declarations: [InventoryComponent, InventoryDashboardComponent, StockEntryComponent, ProductsComponent, CategoriesComponent]
})
export class InventoryModule { }
