import { Component } from '@angular/core';

@Component({
  selector: 'app-vehicle-name',
  templateUrl: './vehicle-name.component.html',
  styleUrls: ['./vehicle-name.component.scss']
})
export class VehicleNameComponent {
currentstep:number=1;



nextstep(){

  ++this.currentstep
  }
  
Previousstep(){
--this.currentstep
}

}
