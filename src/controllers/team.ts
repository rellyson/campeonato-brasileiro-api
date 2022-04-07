import { NextFunction, Request, Response } from "express";

import { TeamService } from "../services/team";

export class TeamController {

    service: TeamService = new TeamService();

    static bootstrap() {
        return new TeamController();
    }

    getAll = (req: Request, res: Response, next: NextFunction) => {
        try {
            let teams = this.service.getAll();
            res.json(teams);
        } catch (error) {
            res.send('Internal Server Error').status(500);
        }
    }

    findOne = (req: Request, res: Response, next: NextFunction) => {
        try {
            let id = req.params['id'];
            let team = this.service.findOne(id);
            res.json(team);
        } catch (error) {
            res.send('Internal Server Error').status(500);
        }
    }

    create = (req: Request, res: Response, next: NextFunction) => {
        try {
            let team = req.body;
            console.log(req.body);
            let teamCreated = this.service.create(team);
            res.send(teamCreated).status(200);
        } catch (error) {
            res.send('Internal Server Error').status(500);
        }
    }

    update = (req: Request, res: Response, next: NextFunction) => {
        try {
            let id = req.params['id'];
            let team = req.body;
            let teamUpdated = this.service.update(id, team);
            res.send(teamUpdated).status(201);
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