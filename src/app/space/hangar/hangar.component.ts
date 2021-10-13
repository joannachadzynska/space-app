import { Component, OnInit } from '@angular/core';
import { BomberShip } from '../models/bomber-ship';
import { FighterShip } from '../models/fighter-ship';
import { Pilot } from '../models/pilot';
import { SpaceShip } from '../models/space-ship';

@Component({
    selector: 'app-hangar',
    templateUrl: './hangar.component.html',
    styleUrls: ['./hangar.component.scss'],
})
export class HangarComponent implements OnInit {
    spaceShips: SpaceShip[] = [];

    constructor() {}

    ngOnInit(): void {
        this.spaceShips.push(
            new FighterShip(new Pilot('Lee Adama', '/assets/adama.png'))
        );
        this.spaceShips.push(new BomberShip());
    }
}
