const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const assetRoutes = require('./routes/asset');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Configurações do CORS para permitir apenas o domínio de produção
const corsOptions = {
  origin: 'https://assetmanager.vercel.app',
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: ['Content-Type', 'Authorization']
};

// Middleware de CORS
app.use(cors(corsOptions));
app.use(express.json());

// Rotas
app.use('/api/auth', authRoutes);
app.use('/api/assets', assetRoutes);

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

// Conectar ao MongoDB
const mongoURI = 'mongodb+srv://xxxxxxxxxx:xxxxxxxx@activos.p2xqg.mongodb.net/';
mongoose.connect(mongoURI)

.then(() => {
  console.log('Conectado ao MongoDB com sucesso!');
})
.catch((err) => {
  console.error('Erro ao conectar ao MongoDB:', err);
});

// Usar rotas
app.use('/api/auth', authRoutes);
app.use('/api/assets', assetRoutes);

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
