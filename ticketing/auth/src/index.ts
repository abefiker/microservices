import express from 'express';
import 'express-async-errors';
import mongoose from 'mongoose';
import cookieSession from 'cookie-session';
import { json } from 'body-parser';
import { CurrentUserRouter } from './routes/current-user';
import { SignupRouter } from './routes/signup';
import { SigninRouter } from './routes/signin';
import { SignoutRouter } from './routes/signout';
import { errorHandler } from './middlewares/error-handler';
import { NotFoundError } from './errors/not-found-error';

const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: true,
  })
);

app.use(CurrentUserRouter);
app.use(SignupRouter);
app.use(SigninRouter);
app.use(SignoutRouter);
app.all('*', async (req, res) => {
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
const start = async () => {
  if(!process.env.JWT_KEY){
    throw new Error('JWT_KEY environment variable is missing');
  }
  try {
    await mongoose.connect('mongodb://auth-mongo-srv:27017');
    console.log('database connected');
  } catch (err) {
    console.log(`Error: ${err}`);
  }
  app.listen(3030, () => {
    console.log('Auth service running on port 3030');
  });
};
start();
