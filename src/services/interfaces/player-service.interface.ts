import { Player } from "@prisma/client";
import { CreatePlayerDTO } from "../../dtos/create-player";

export interface PlayerServiceInterface {
    createPlayer(player: CreatePlayerDTO): Promise<Player>
    getPlayerFromId(id: string): Promise<Player>
}
