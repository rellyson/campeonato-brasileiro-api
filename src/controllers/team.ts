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
}