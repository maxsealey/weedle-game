const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/pokemon/:name', async (req, res) => {
  const { name } = req.params;
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data from PokeAPI' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
