import {expressjwt as jwt} from 'express-jwt';

const BEARER_REGEX = /^(Bearer+\s)*([a-zA-Z0-9]+)$/;

const jwtMiddleware = () =>
  jwt({
    secret: process.env.SECRET!,
    algorithms: ['HS256'],
    credentialsRequired: false,
    getToken: req => {
      const token = BEARER_REGEX.exec(req.headers.authorization || '');
      return token?.[2];
    },
  });

export default jwtMiddleware;
