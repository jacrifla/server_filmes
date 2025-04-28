const express = require('express');
const cors = require('cors');
const app = express();

// Configuração do CORS
const corsOptions = {
  origin: ['http://localhost:4000', 'https://procura-filmes.netlify.app'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

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

module.exports = app;
