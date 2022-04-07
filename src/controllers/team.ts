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
            let teamSaved = this.service.create(team);
            res.send(team).status(200);
        } catch (error) {
            res.send('Internal Server Error').status(500);
        }
    }

    update = (req: Request, res: Response, next: NextFunction) => {
        try {
            let id = req.params['id'];
            let team = req.body;
            let teamSaved = this.service.update();
            res.send().status(200);
        } catch (error) {
            res.send('Internal Server Error').status(500);
        }
    }

    delete = (req: Request, res: Response, next: NextFunction) => {
        try {
            let id = req.params['id'];
            let team = req.body;
            this.service.delete();
            res.send().status(200);
        } catch (error) {
            res.send('Internal Server Error').status(500);
        }
    }
}