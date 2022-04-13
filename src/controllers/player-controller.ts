import { Request, Response, NextFunction } from "express";
import { PlayerServiceInterface } from "../services/interfaces/player-service.interface";
import { CreatePlayerDTO } from "../dtos/create-player";
import { BadRequestException } from "../exceptions/bad-request-exception";
import { UpdatePlayerDTO } from "../dtos/update-player";

export class PlayerController {
    constructor(private service: PlayerServiceInterface) { }

    getAll = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const players = await this.service.getAllPlayers();
            res.send(players).status(200);
        } catch (err: any) {
            res.send(err).status(err.code);
        }
    }

    findOne = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id = req.params['id'];
            const player = await this.service.getPlayerById(id);
            res.send(player).status(200);
        } catch (err: any) {
            res.send(err).status(err.code);
        }
    }

    create = async (req: Request, res: Response) => {
        try {
            const dto = new CreatePlayerDTO(req.body);

            dto.validate().catch((err) => {
                throw new BadRequestException(err.errors.toString())
            })

            const player = await this.service.createPlayer(dto);

            return res.json(player).status(201);
        } catch (err: any) {
            return res.json(err).status(err.status)
        }
    }

    update = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const dto = new UpdatePlayerDTO(req.body);
            const id = req.params['id'];

            dto.validate().catch((err) => {
                throw new BadRequestException(err.errors.toString())
            })

            const player = await this.service.updatePlayer(id, dto);

            return res.json(player).status(201);
        } catch (err: any) {
            return res.json(err).status(err.status)
        }
    }

    delete = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id = req.params['id'];

            await this.service.deletePlayer(id);

            return res.json(id).status(204);
        } catch (err: any) {
            return res.json(err).status(err.status)
        }
    }
}