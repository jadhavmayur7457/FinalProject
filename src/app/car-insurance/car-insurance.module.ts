import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarInsuranceRoutingModule } from './car-insurance-routing.module';
import { CarInsuranceComponent } from './car-insurance.component';
import { VehicleSearchComponent } from './vehicle-search/vehicle-search.component';
import { VehicleNameComponent } from './vehicle-name/vehicle-name.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { YearSelectionComponent } from './year-selection/year-selection.component';



@NgModule({
  declarations: [
    CarInsuranceComponent,
    VehicleSearchComponent,
    VehicleNameComponent,
    CarDetailComponent,
    YearSelectionComponent
  ],
  imports: [
    CommonModule,
    CarInsuranceRoutingModule,
   
  ]
})
export class CarInsuranceModule { }
