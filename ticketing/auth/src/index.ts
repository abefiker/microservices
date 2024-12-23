import express from 'express';
import 'express-async-errors'
import { json } from 'body-parser';
import { CurrentUserRouter } from './routes/current-user';
import { SignupRouter } from './routes/signup';
import { SigninRouter } from './routes/signin';
import { SignoutRouter } from './routes/signout';
import { errorHandler } from './middlewares/error-handler';
import { NotFoundError } from './errors/not-found-error';

const app = express();
app.use(json());

app.use(CurrentUserRouter);
app.use(SignupRouter);
app.use(SigninRouter);
app.use(SignoutRouter);
app.all('*', async (req,res) => {
  throw new NotFoundError();
});
app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    errorHandler(err, req, res, next);
  }
);
app.listen(3030, () => {
  console.log('Auth service running on port 3030');
});
