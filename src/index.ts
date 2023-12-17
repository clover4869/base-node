import * as express from 'express';
import UserRouter from './modules/user/user.router.';
import { PostgresDataSource } from './database/data-source';

PostgresDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization:', err);
  });

const app = express();

const PORT = process.env.PORT || 3000;

app.use('', UserRouter);

// app.get('/', async (req: any, res) => {
//   res.json({ status: true, message: 'Our node.js app works' });
// });

app.listen(PORT, () =>
  console.log(`App listening at porttt ${PORT} http://localhost:3000`),
);
