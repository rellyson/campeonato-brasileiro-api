import { Player, PrismaClient } from '@prisma/client'
import { CreatePlayerDTO } from '../dtos/create-player';
import { UpdatePlayerDTO } from '../dtos/update-player';
import { NotFoundException } from '../exceptions/not-found-exception';
import { PlayerServiceInterface } from '../services/interfaces/player-service.interface';

export class PlayerService implements PlayerServiceInterface {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    public async getAllPlayers() {
        return await this.prisma.player.findMany();
    }

    public async getPlayerById(id: string) {
        return await this.prisma.player.findUnique({ where: { id } });
    }

    public async createPlayer(data: CreatePlayerDTO) {
        const player = await this.prisma.player.create({
            data: {
                fullName: data.fullName,
                birthDate: data.birthdate,
                country: data.country
            },
        }).catch((error) => {
            console.log(`An error occurred while creating a player: ${error}`)
            throw error
        })

        return player!;
    }

    public async updatePlayer(id: string, data: UpdatePlayerDTO) {
        const player = await this.prisma.player.update({
            where: { id },
            data: {
                fullName: data.fullName,
                birthDate: data.birthdate,
                country: data.country
            }
        }).catch((error) => {
            console.log(`An error occurred while creating a player: ${error}`)
            throw error
        })

        return player!;
    }

    public async deletePlayer(id: string) {
        const player = await this.prisma.player.delete({
            where: { id },
        }).catch((error) => {
            console.log(`An error occurred while deleting a player: ${error}`)
            throw error
        })

        return player!;
    }

    async getPlayerFromId(id: string): Promise<Player> {
        const player = await this.prisma.player.findUnique({
            where: {
                id
            }
        })

        if (!player) {
            throw new NotFoundException(`Player with id ${id} was not found`)
        }

        return player!
    }
}
