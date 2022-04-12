import { Request, Response, NextFunction } from "express";
import { TournamentService } from "../services/tournament-service";

export class TournamentController {
    private service: TournamentService;

    constructor() {
        this.service = new TournamentService()
    }

    async getAllTournaments(req: Request, res: Response, next: NextFunction) { }

    async findTournamentById(req: Request, res: Response, next: NextFunction) { }

    async createTournament(req: Request, res: Response, next: NextFunction) { }

    async updateTournament(req: Request, res: Response, next: NextFunction) { }

    async deleteTournament(req: Request, res: Response, next: NextFunction) { }
}