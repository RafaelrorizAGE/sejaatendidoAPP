import { Request, Response } from 'express';
import { prisma } from '../utils/prisma';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { ENV } from '../env';

function gerarToken(id:string, tipo:string){ return jwt.sign({ id, tipo }, ENV.JWT_SEGREDO, { expiresIn: '15d' }); }

export async function registro(req:Request, res:Response){
  try{
    const { nome, email, senha, tipo } = req.body;
    const existe = await prisma.usuario.findUnique({ where:{ email } });
    if(existe) return res.status(400).json({ erro:'Email já cadastrado' });
    const senhaHash = await bcrypt.hash(senha, 10);
    const user = await prisma.usuario.create({ data:{ nome, email, senhaHash, tipo } });
    if(tipo === 'MEDICO') await prisma.medico.create({ data:{ usuarioId: user.id, crm:'', especialidades:[] }});
    else await prisma.paciente.create({ data:{ usuarioId: user.id }});
    res.json({ id: user.id });
  }catch(e){ console.error(e); res.status(500).json({ erro:'registro falhou' }); }
}

export async function login(req:Request, res:Response){
  try{
    const { email, senha } = req.body;
    const user = await prisma.usuario.findUnique({ where:{ email }});
    if(!user) return res.status(401).json({ erro:'Credenciais invalidas' });
    const ok = await bcrypt.compare(senha, user.senhaHash);
    if(!ok) return res.status(401).json({ erro:'Credenciais invalidas' });
    const token = gerarToken(user.id, user.tipo);
    res.json({ token, usuario:{ id:user.id, nome:user.nome, email:user.email, tipo:user.tipo } });
  }catch(e){ console.error(e); res.status(500).json({ erro:'login falhou' }); }
}

// Google login: receive idToken from frontend (verify recommended)
export async function loginGoogle(req:Request, res:Response){
  try{
    const { idToken } = req.body;
    // In production verify with Google API. Here decode payload for demo.
    const payload = JSON.parse(Buffer.from(idToken.split('.')[1], 'base64').toString());
    const email = payload.email;
    const nome = payload.name || email.split('@')[0];
    let user = await prisma.usuario.findUnique({ where:{ email } });
    if(!user){
      user = await prisma.usuario.create({ data:{ nome, email, senhaHash:'', tipo:'PACIENTE' }});
      await prisma.paciente.create({ data:{ usuarioId: user.id }});
    }
    const token = gerarToken(user.id, user.tipo);
    res.json({ token, usuario:{ id:user.id, nome:user.nome, email:user.email, tipo:user.tipo }});
  }catch(e){ console.error(e); res.status(500).json({ erro:'google login falhou' }); }
}
