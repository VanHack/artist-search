import { Base } from '../base';

export class Venue implements Base {
    public name: string;
    public latitude: number;
    public longitude: number;
    public city: string;
    public region: string;
    public country: string;

    constructor() { }
}
