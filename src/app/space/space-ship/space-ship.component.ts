import { Component, Input, OnInit } from '@angular/core';
import { SpaceShip } from '../models/space-ship';

@Component({
    selector: 'app-space-ship',
    templateUrl: './space-ship.component.html',
    styleUrls: ['./space-ship.component.scss'],
})
export class SpaceShipComponent implements OnInit {
    @Input() spaceShip!: SpaceShip;

    constructor() {}

    ngOnInit(): void {}
}
