import { Router } from 'express';
import { MatchController } from '../../controllers/match-controller';
import { TournamentController } from '../../controllers/tournament-controller';

const tournamentController = new TournamentController();
const matchController = new MatchController();
const tournamentRouter = Router();

// tournament handling
tournamentRouter.get('/', tournamentController.getAll);
tournamentRouter.get('/:id', tournamentController.findOne);
tournamentRouter.post('/', tournamentController.create);
tournamentRouter.put('/:id', tournamentController.update);
tournamentRouter.delete('/:id', tournamentController.delete);

// match handling
tournamentRouter.post('/:id/partidas/:matchId/eventos/inicio ', matchController.startMatch);
tournamentRouter.post('/:id/partidas/:matchId/eventos/gol ', matchController.scoreGoal);
tournamentRouter.post('/:id/partidas/:matchId/eventos/intervalo ', matchController.startInterval);
tournamentRouter.post('/:id/partidas/:matchId/eventos/acrescimo ', matchController.additionalTime);
tournamentRouter.post('/:id/partidas/:matchId/eventos/substituição ', matchController.playerSubstitution);
tournamentRouter.post('/:id/partidas/:matchId/eventos/advertencia ', matchController.playerAdvertence);
tournamentRouter.post('/:id/partidas/:matchId/eventos/fim ', matchController.endMatch);

export default tournamentRouter;