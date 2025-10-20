import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth';
import medicoRoutes from './routes/medicos';
import pacienteRoutes from './routes/pacientes';
import adminRoutes from './routes/admin';
import pagamentoRoutes from './routes/pagamentos';
import { ENV } from './env';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (_req,res)=> res.json({ ok:true, servico:'sejaatendido-backend' }));

app.use('/auth', authRoutes);
app.use('/medicos', medicoRoutes);
app.use('/paciente', pacienteRoutes);
app.use('/admin', adminRoutes);
app.use('/pagamentos', pagamentoRoutes);

const PORT = ENV.PORTA || 3001;
app.listen(PORT, ()=> console.log('API rodando', PORT));
