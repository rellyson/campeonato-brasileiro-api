import { Router } from 'express';
import { Kafka } from 'kafkajs';
import { MatchController } from '../../controllers/match-controller';
import { TournamentController } from '../../controllers/tournament-controller';
import { KafkaProducer } from '../../messaging/kafka/kafka-producer';
import { MatchService } from '../../services/match-service';
import { TournamentService } from '../../services/tournament-service';

const kafkaClient = new Kafka({
    clientId: '1',
    brokers: ['kafka:29092'],
})

const kafkaProducer = new KafkaProducer(kafkaClient);
const matchService = new MatchService(kafkaProducer);
const tournamentService = new TournamentService();
const tournamentController = new TournamentController(tournamentService);
const matchController = new MatchController(matchService);
const tournamentRouter = Router();

// tournament handling
tournamentRouter.get('/', tournamentController.getAllTournaments);
tournamentRouter.get('/:id', tournamentController.findTournamentById);
tournamentRouter.post('/', tournamentController.createTournament);
tournamentRouter.put('/:id', tournamentController.updateTournament);
tournamentRouter.delete('/:id', tournamentController.deleteTournament);

// match handling
tournamentRouter.post('/:id/partidas/:matchId/eventos/inicio', matchController.startMatch);
tournamentRouter.post('/:id/partidas/:matchId/eventos/gol', matchController.scoreGoal);
tournamentRouter.post('/:id/partidas/:matchId/eventos/intervalo', matchController.startInterval);
tournamentRouter.post('/:id/partidas/:matchId/eventos/acrescimo', matchController.additionalTime);
tournamentRouter.post('/:id/partidas/:matchId/eventos/substituicao', matchController.playerSubstitution);
tournamentRouter.post('/:id/partidas/:matchId/eventos/advertencia', matchController.playerAdvertence);
tournamentRouter.post('/:id/partidas/:matchId/eventos/fim', matchController.endMatch);

export default tournamentRouter;