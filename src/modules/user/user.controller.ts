import { NextFunction, Request, Response } from 'express';

import * as CURDUserServices from './services/curd.services';

const get = async (req: Request, res: Response, next: NextFunction) => {
  res.send('hihi');
  return CURDUserServices.findAll();
};
const create = (req: Request, res: Response, next: NextFunction) => {};
const update = (req: Request, res: Response, next: NextFunction) => {};
const deleteById = (req: Request, res: Response, next: NextFunction) => {};
const getById = (req: Request, res: Response, next: NextFunction) => {};

export { get, update, deleteById, getById, create };
