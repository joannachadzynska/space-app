import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HangarComponent } from './hangar/hangar.component';
import { SpaceRoutingModule } from './space-routing.module';
import { SpaceShipComponent } from './space-ship/space-ship.component';
import { PilotComponent } from './pilot/pilot.component';
import { PilotRoomComponent } from './pilot-room/pilot-room.component';

@NgModule({
    declarations: [HangarComponent, SpaceShipComponent, PilotComponent, PilotRoomComponent],
    imports: [CommonModule, SpaceRoutingModule],
    exports: [HangarComponent],
})
export class SpaceModule {}
