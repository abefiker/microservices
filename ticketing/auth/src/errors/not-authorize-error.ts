import { CustomError } from './custom-error';
export class NotAuthorizeError extends CustomError {
  statusCode = 401;
  constructor() {
    super('not authorized');
    Object.setPrototypeOf(this, NotAuthorizeError.prototype);
  }
  serializeErrors() {
    return [{ message: 'not authorize' }];
  }
}
