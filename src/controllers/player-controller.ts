import { Request, Response, NextFunction } from "express";
import { PlayerServiceInterface } from "../services/interfaces/player-service.interface";
import { CreatePlayerDTO } from "../dtos/create-player";
import { BadRequestException } from "../exceptions/bad-request-exception";

export class PlayerController {
    constructor(private service: PlayerServiceInterface) { }
    async getAll(req: Request, res: Response, next: NextFunction) {

    }

    async findOne(req: Request, res: Response, next: NextFunction) {

    }

    async create(req: Request, res: Response) {
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

    async update(req: Request, res: Response, next: NextFunction) {

    }

    async delete(req: Request, res: Response, next: NextFunction) {

    }
}