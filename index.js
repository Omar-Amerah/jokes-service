const express = require('express');
const { Op } = require('sequelize');
const app = express();
const { Joke } = require('./db');

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/jokes', async (req, res, next) => {
  let jokes = []
  try {
    if(req.query.tags) {
      jokes = await Joke.findAll({where: { tags:{[Op.substring]: req.query.tags }}})
    } 
    if(req.query.content)
    {
      jokes = await Joke.findAll({where: { joke: {[Op.substring]: req.query.content }}})
    }
    if(!req.query.tags && ! req.query.content)
    {
      jokes = await Joke.findAll()
    }
    res.send(jokes)
    // TODO - filter the jokes by tags and content
    res.send(jokes);
  } catch (error) {
    console.error(error);
    next(error)
  }
});

// we export the app, not listening in here, so that we can run tests
module.exports = app;
