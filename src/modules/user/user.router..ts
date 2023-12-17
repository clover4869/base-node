import * as express from 'express';

import * as UserControllers from './user.controller';

const UserRouter = express.Router();
// middleware that is specific to this UserRouter
UserRouter.use((req, res, next) => {
  console.log('Time: ', Date.now());
  next();
});
UserRouter.get('/', UserControllers.get);
UserRouter.get('/:id', UserControllers.getById);
UserRouter.delete('/:id', UserControllers.deleteById);
UserRouter.put('/:id', UserControllers.update);
UserRouter.post('/', UserControllers.create);

export default UserRouter;
