import { PrismaClient } from "@prisma/client";
import { CreateClubDTO } from "../dtos/create-team";
import { NotFoundException } from "../exceptions/not-found-exception";
import { ClubServiceInterface } from "./interfaces/club-service.interface";

export class ClubService implements ClubServiceInterface {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient()
    }

    async getAllClubs() {
        try {
            console.log('Entrei aqui');
            return await this.prisma.club.findMany();
        } catch (error) {
            console.log('Catch error => ', error);
            return new Array();
        }
    }

    async getClubById(id: string) {
        const club = await this.prisma.club.findUnique({
            where: {
                id
            }
        })
        
        if (!club) {
            throw new NotFoundException(`Club with id ${id} was not found`)
        }

        return club;
    }

    async createClub(data: CreateClubDTO) {
        const club = await this.prisma.club.create({
            data: {
                abbreviation: data.abbreviation,
                city: data.city,
                country: data.country,
                name: data.name,
            }
        }).catch((error) => {
            console.log(`An error occurred while creating a club: ${error}`)
            throw error
        })

        return club;
    }

    async update(id: string, club: CreateClubDTO) {
        // TODO: Implementar update na base de dados.
        return club;
    }

    delete(id: string) {
        // TODO: Implementar deleção.
        return id;
    }
}