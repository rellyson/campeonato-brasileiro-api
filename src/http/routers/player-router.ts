import { PlayerController } from '../../controllers/player-controller';
import { PlayerService } from '../../services/player-service';
import { Router } from 'express';

const service = new PlayerService()
const controller = new PlayerController(service)
const playerRouter = Router();
playerRouter.post('/', controller.create);

export default playerRouter;
