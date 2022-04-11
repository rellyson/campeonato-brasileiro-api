import { NextFunction, Request, Response } from "express";

import { ClubService } from "../services/club-service";

export class ClubController {
    constructor(private service: ClubService) { }

    getAll = (req: Request, res: Response, next: NextFunction) => {
        try {
            let clubs = this.service.getAll();
            res.json(clubs);
        } catch (error) {
            res.send('Internal Server Error').status(500);
        }
    }

    findOne = (req: Request, res: Response, next: NextFunction) => {
        try {
            let id = req.params['id'];
            let club = this.service.findOne(id);
            res.json(club);
        } catch (error) {
            res.send('Internal Server Error').status(500);
        }
    }

    create = (req: Request, res: Response, next: NextFunction) => {
        try {
            let club = req.body;
            console.log(req.body);
            let clubCreated = this.service.create(club);
            res.send(clubCreated).status(200);
        } catch (error) {
            res.send('Internal Server Error').status(500);
        }
    }

    update = (req: Request, res: Response, next: NextFunction) => {
        try {
            let id = req.params['id'];
            let club = req.body;
            let clubUpdated = this.service.update(id, club);
            res.send(clubUpdated).status(201);
        } catch (error) {
            res.send('Internal Server Error').status(500);
        }
    }

    delete = (req: Request, res: Response, next: NextFunction) => {
        try {
            let id = req.params['id'];
            this.service.delete(id);
            res.send(id).status(204);
        } catch (error) {
            res.send('Internal Server Error').status(500);
        }
    }
}