/**
 * Classe de transação time / jogador / time
 */

export class Transaction {
    public playerId: string;
    public playerName: string;
    public buyerTeamId: string;
    public buyerTeamName: string;
    public datetime: Date;

    constructor(
        playerId: string,
        playerName: string,
        buyerTeamId: string,
        buyerTeamName: string,
        datetime: Date
    ) {
        this.playerId = playerId;
        this.playerName = playerName;
        this.buyerTeamId = buyerTeamId;
        this.buyerTeamName = buyerTeamName;
        this.datetime = datetime;
    }
}