/**
 * Classe de jogador.
 */

import { Transaction } from "./transaction";

export class Player {
    public name: string;
    public teamId: string;
    public transactions: Transaction[];

    constructor(
        name: string,
        teamId: string,
        transactions: Transaction[],
    ) {
        this.name = name;
        this.teamId = teamId;
        this.transactions = transactions;
    }
}