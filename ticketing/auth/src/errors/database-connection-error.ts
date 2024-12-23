import { CustomError } from './custom-error';
export class DatabaseConnectionError extends CustomError {
  statusCode = 500;
  reason = 'Error connecting to database';

  constructor() {
    // Pass the error message to the parent class
    super('Error connecting to database');
    // Set the prototype explicitly to maintain proper prototype chain
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  serializeErrors() {
    return [
      {
        message: this.reason,
      },
    ];
  }
}
