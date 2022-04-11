import { Router } from 'express';
import { PlayerController } from '../../controllers/player-controller';
import { PlayerService } from '../../services/player-service';

export const playerRouter = () => {
    const router = Router()
    const service = new PlayerService()
    const controller = new PlayerController(service)
    
    router.post('/', controller.create);
    
    return router;
}
