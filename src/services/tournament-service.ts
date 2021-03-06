import { PrismaClient } from "@prisma/client";
import { TournamentCreateDTO } from "../dtos/create-tournament";
import { NotFoundException } from "../exceptions/not-found-exception";
import { TournamentServiceInterface } from "./interfaces/tournament-service.interface";

export class TournamentService implements TournamentServiceInterface {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient()
    }

    async getAllTournaments() {
        return await this.prisma.tounament.findMany();
    }

    async findTournamentById(id: string) {
        const tournament = await this.prisma.tounament.findUnique({
            where: {
                id
            }
        });

        if (!tournament) {
            throw new NotFoundException(`Tournament with id ${id} was not found`)
        }

        return tournament;
    }

    // Adicionar modelo tournament
    async createTournament(tournament: TournamentCreateDTO) {
        await this.prisma.tounament.create({
            data: {

            }
        })
        return tournament;
    }

    // Adicionar modelo tournament
    async updateTournament(id: string, tournament: TournamentCreateDTO) {
        // TODO: Implementar update na base de dados.
        return tournament;
    }

    async deleteTournamentById(id: string) {
        // TODO: Implementar deleção.
        return id;
    }
}