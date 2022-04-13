import { Request, Response, NextFunction } from "express";
import { TournamentServiceInterface } from "../services/interfaces/tournament-service.interface";
import { TournamentService } from "../services/tournament-service";

export class TournamentController {
    constructor(private service: TournamentServiceInterface) {}

    async getAllTournaments(req: Request, res: Response, next: NextFunction) { }

    async findTournamentById(req: Request, res: Response, next: NextFunction) { }

    async createTournament(req: Request, res: Response, next: NextFunction) { }

    async updateTournament(req: Request, res: Response, next: NextFunction) { }

    async deleteTournament(req: Request, res: Response, next: NextFunction) { }
}