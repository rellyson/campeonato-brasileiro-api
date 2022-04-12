import { Request, Response } from "express";
import { Kafka } from "kafkajs";
import { MessagingInterface } from "../messaging/interfaces/messaging.interface";
import { KafkaProducer } from "../messaging/kafka/kafka-producer";
import { MatchService } from "../services/match-service";

export class MatchController {
    private service: MatchService;

    constructor(kafkaClient: Kafka) {
        const kafkaProducer = new KafkaProducer(kafkaClient);
        this.service = new MatchService(kafkaProducer);
    }

    async startMatch(req: Request, res: Response) {
        try {
            const data = req.body;
            await this.service.startMatch(data);
        } catch (err: any) {
            return res.json(err).status(err.status);
        }
    }

    async scoreGoal(req: Request, res: Response) {
        try {
            const data = req.body;
            await this.service.scoreGoal(data);
        } catch (err: any) {
            return res.json(err).status(err.status);
        }
    }

    async startInterval(req: Request, res: Response) {
        try {
            const data = req.body;
            await this.service.startInterval(data);
        } catch (err: any) {
            return res.json(err).status(err.status);
        }
    }

    async additionalTime(req: Request, res: Response) {
        try {
            const data = req.body;
            await this.service.additionalTime(data);
        } catch (err: any) {
            return res.json(err).status(err.status);
        }
    }

    async playerSubstitution(req: Request, res: Response) {
        try {
            const data = req.body;
            await this.service.playerSubstitution(data);
        } catch (err: any) {
            return res.json(err).status(err.status);
        }
    }

    async playerAdvertence(req: Request, res: Response) {
        try {
            const data = req.body;
            await this.service.playerAdvertence(data);
        } catch (err: any) {
            return res.json(err).status(err.status);
        }
    }

    async endMatch(req: Request, res: Response) {
        try {
            const data = req.body;
            await this.service.endMatch(data);
        } catch (err: any) {
            return res.json(err).status(err.status);
        }
    }
}