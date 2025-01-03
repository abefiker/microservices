import { scrypt, randomBytes } from 'crypto';
import { promisify } from 'util';
const scryptAsync = promisify(scrypt);
export class Password {
  static async toHash(password: string) {
    const salt = randomBytes(10).toString('hex');
    const hashed = (await scryptAsync(password, salt, 64)) as Buffer;
    return `${hashed.toString('hex')}.${salt}`;
  }
  static async compare(storedPassword: string, suppliedPassword: string) {
    const [hashedPassword, salt] = storedPassword.split('.');
    const hashed = (await scryptAsync(suppliedPassword, salt, 64)) as Buffer;
    return hashed.toString('hex') === hashedPassword;
  }
}
