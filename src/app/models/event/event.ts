import { Base } from '../base';
import { Venue } from './venue';
import { Offer } from './offer';

export class Event implements Base {
    public id: number;
    public url: string;
    public on_sale_datetime: Date;
    public datetimethumb_url: Date;
    public venue: Venue;
    public offers: Offer[];
    public lineup: string[];

    constructor() { }
}
