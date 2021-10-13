export class Pilot {
    firstName = '';
    lastName = '';
    imageUrl = '';

    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(value: string) {
        const values = value.split(' ');
        this.firstName = values[0];
        this.lastName = values[1];
    }

    static defaultImageUrl = '/assets/unknown-pilot.png';

    constructor(fullName: string, imageUrl: string = Pilot.defaultImageUrl) {
        this.fullName = fullName;
        this.imageUrl = imageUrl;
    }
}
