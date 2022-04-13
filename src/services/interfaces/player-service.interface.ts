import { Player } from "@prisma/client";
import { CreatePlayerDTO } from "../../dtos/create-player";
import { UpdatePlayerDTO } from "../../dtos/update-player";

export interface PlayerServiceInterface {
    getAllPlayers(): Promise<any>;
    getPlayerById(id: string): Promise<any>;
    createPlayer(player: CreatePlayerDTO): Promise<Player>;
    updatePlayer(id: string, player: UpdatePlayerDTO): Promise<Player>;
    deletePlayer(id: string): Promise<any>;
    getPlayerFromId(id: string): Promise<Player>;
}
