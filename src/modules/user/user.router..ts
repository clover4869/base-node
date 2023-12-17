import * as express from 'express';
import { NextFunction, Request, Response, Router } from 'express';
import * as UserControllers from './user.controller';
import HTTPMethod from './../../constants/httpMethod';
import { HTTPStatus } from './../../constants/httpStatus';

const UserRouter = express.Router();
// middleware that is specific to this UserRouter
UserRouter.use((req, res, next) => {
  console.log('Time: ', Date.now());
  next();
});

interface IHOF {
  router: Router;
  method: HTTPMethod;
  path: string;
  cb: (
    req: Request,
    res: Response,
    next?: NextFunction,
  ) => Promise<{
    status: HTTPStatus;
    data: any;
  }> | void;
}

function HOF({ router, method, cb, path }: IHOF) {
  router[method](
    path,
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const data = await cb(req, res, next);
        res.send(data);
      } catch (error) {
        console.log({ error });
      }
    },
  );
}

HOF({
  router: UserRouter,
  method: HTTPMethod.GET,
  cb: UserControllers.get,
  path: '/',
});

// UserRouter.get('/', UserControllers.get);
// UserRouter.get('/:id', UserControllers.getById);
// UserRouter.delete('/:id', UserControllers.deleteById);
// UserRouter.put('/:id', UserControllers.update);
// UserRouter.post('/', UserControllers.create);

export default UserRouter;
