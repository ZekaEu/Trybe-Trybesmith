import jwt from 'jsonwebtoken';
import { Users } from '../interfaces';

const SECRET = 'summalummadoomalooma';

const jwtConfig = { expiresIn: '7d' };

const generateToken = (data: Users) => {
  const token = jwt.sign({ data }, SECRET, jwtConfig);
  return token;
};

export default generateToken;
