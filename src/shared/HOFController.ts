import { NextFunction, Response, Request } from 'express';

const HOFController = async (
  req: Request,
  res: Response,
  next: NextFunction,
  cb,
) => {
  try {
    const data = await cb();
    res.send(data);
  } catch (error) {
    console.log({ error });
  }
};

export { HOFController };
