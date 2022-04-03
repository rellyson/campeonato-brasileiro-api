/**
 * Classe de transações time / jogador / time
 */

import { Transaction } from "./transaction";

export class Team {
    public id: string;
    public name: string;
    public country: string;
    public transactions: Transaction[];

    constructor(
        id: string,
        name: string,
        country: string,
        transactions: Transaction[],
    ) {
        this.id = id;
        this.name = name;
        this.country = country;
        this.transactions = transactions;
    }
}