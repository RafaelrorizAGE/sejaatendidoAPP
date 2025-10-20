import { Router } from 'express';
import { registro, login, loginGoogle } from '../controllers/auth.controller';
const r = Router();
r.post('/registro', registro);
r.post('/login', login);
r.post('/login-google', loginGoogle);
export default r;
