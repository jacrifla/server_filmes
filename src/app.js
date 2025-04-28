const express = require('express');
const cors = require('cors');
const app = express();

// Configuração do CORS
const corsOptions = {
  origin: [
    'http://localhost:5173', 
    'https://procura-filmes.netlify.app', 
    'https://server-filmes-production.up.railway.app'
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

app.options('*', cors(corsOptions));

// Rotas da API
app.use('/media', require('./routes/mediaRoutes'));
app.use('/ratings', require('./routes/ratingRoutes'));
app.use('/auth', require('./routes/authRoutes'));
app.use('/user', require('./routes/userRoutes'));
app.use('/watchlist', require('./routes/watchlistRoutes'));

// Rota inicial
app.get('/', (req, res) => {
  res.send('API is running 🎬');
});

// Middleware para tratar erros
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Algo deu errado no servidor! 🚨' });
});

module.exports = app;
