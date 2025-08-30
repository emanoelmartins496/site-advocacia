// backend/server.js
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config(); // 1. Carrega as variáveis do ficheiro .env

const app = express();
app.use(cors());
app.use(express.json());

// --- CONFIGURAÇÃO DO EMAIL ---
// Agora, usamos as variáveis de ambiente em vez das informações diretas
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER, // 2. Lê o email do .env
    pass: process.env.EMAIL_PASS, // 3. Lê a senha do .env
  },
});
// ----------------------------

app.post('/api/contato', (req, res) => {
  const { nome, email, telefone, mensagem } = req.body;

  if (!nome || !email || !mensagem) {
    return res.status(400).json({ status: 'erro', mensagem: 'Campos obrigatórios não preenchidos.' });
  }

  const mailOptions = {
    from: `"Site Advocacia" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO, // 4. Lê o email de destino do .env
    replyTo: email,
    subject: `Nova mensagem do site de ${nome}`,
    html: `<p>Nome: ${nome}</p><p>Email: ${email}</p><p>Telefone: ${telefone}</p><p>Mensagem: ${mensagem}</p>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Erro ao enviar email:", error);
      return res.status(500).json({ status: 'erro', mensagem: 'Falha ao enviar o email.' });
    }
    console.log('Email enviado: %s', info.messageId);
    return res.status(200).json({ status: 'sucesso', mensagem: 'Mensagem enviada com sucesso!' });
  });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor backend rodando na porta ${PORT}`);
});
