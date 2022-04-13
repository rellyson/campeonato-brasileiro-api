import { NextFunction, Request, Response } from "express";

import { ClubService } from "../services/club-service";

export class ClubController {
    constructor(public service: ClubService) {
        console.log('============================');
        this.service = new ClubService();
    }

    public async getAllClubs(req: Request, res: Response, next: NextFunction) {
        try {
            console.log('this.service', this.service);
            
            let clubs = await this.service.getAllClubs();
            res.json(clubs);
        } catch (error) {
            res.status(500);
        }
    }

    public async getClubById(req: Request, res: Response, next: NextFunction) {
        try {
            let id = req.params['id'];
            let club = this.service.getClubById(id);
            res.json(club);
        } catch (error) {
            res.send('Internal Server Error').status(500);
        }
    }

    public async createClub(req: Request, res: Response, next: NextFunction) {
        try {
            let club = req.body;
            console.log(req.body);
            let clubCreated = this.service.createClub(club);
            res.send(clubCreated).status(200);
        } catch (error) {
            res.send('Internal Server Error').status(500);
        }
    }

    public async update(req: Request, res: Response, next: NextFunction) {
        try {
            let id = req.params['id'];
            let club = req.body;
            let clubUpdated = this.service.update(id, club);
            res.send(clubUpdated).status(201);
        } catch (error) {
            res.send('Internal Server Error').status(500);
        }
    }

    public async delete(req: Request, res: Response, next: NextFunction) {
        try {
            let id = req.params['id'];
            this.service.delete(id);
            res.send(id).status(204);
        } catch (error) {
            res.send('Internal Server Error').status(500);
        }
    }
}