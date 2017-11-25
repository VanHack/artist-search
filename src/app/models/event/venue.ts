import { Base } from '../base';

export class Venue implements Base {
    public name: string;
    public latitude: string;
    public longitude: string;
    public city: string;
    public region: string;
    public country: string;

    constructor() { }
}
