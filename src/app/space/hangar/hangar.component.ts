import { Component, OnInit } from '@angular/core';
import { Pilot } from '../pilot';
import { SpaceShip } from '../space-ship';
import { BomberShip } from './../bomber-ship';
import { FighterShip } from './../fighter-ship';

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
