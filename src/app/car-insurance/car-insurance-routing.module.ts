import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarInsuranceComponent } from './car-insurance.component';
import { VehicleNameComponent } from './vehicle-name/vehicle-name.component';

const routes: Routes = [{
  path:'select-vehicle',component:VehicleNameComponent
},{path:'',component:VehicleNameComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarInsuranceRoutingModule { }
