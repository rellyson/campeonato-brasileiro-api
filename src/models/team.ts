/**
 * Classe de time.
 */

import { Transaction } from "./transaction";

export class Team {
    public id: string;
    public name: string;
    public transactions: Transaction[];
    public city: string;
    public state: string;
    public country: string;
    public stadium: string;

    constructor(
        id: string,
        name: string,
        transactions: Transaction[],
        city: string,
        state: string,
        country: string,
        stadium: string,
    ) {
        this.id = id;
        this.name = name;
        this.transactions = transactions;
        this.city = city;
        this.state = state;
        this.country = country;
        this.stadium = stadium;
    }
}