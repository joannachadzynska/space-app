import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HangarComponent } from './hangar/hangar.component';
import { SpaceRoutingModule } from './space-routing.module';
import { SpaceShipComponent } from './space-ship/space-ship.component';

@NgModule({
    declarations: [HangarComponent, SpaceShipComponent],
    imports: [CommonModule, SpaceRoutingModule],
    exports: [HangarComponent],
})
export class SpaceModule {}
