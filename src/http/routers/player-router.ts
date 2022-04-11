import { Router } from 'express';
import { PlayerController } from '../../controllers/player-controller';
import { PlayerService } from '../../services/player-service';

const service = new PlayerService()
const controller = new PlayerController(service);
const playerRouter = Router();

playerRouter.get('/', controller.getAll);
playerRouter.get('/:id', controller.findOne);
playerRouter.post('/', controller.create);
playerRouter.put('/:id', controller.update);
playerRouter.delete('/:id', controller.delete);

export default playerRouter;