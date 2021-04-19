var express = require('express');
const checkAuth = require('../auth/checkAuth');
var router = express.Router();
const models = require('../models')

/* GET home page. */
router.get('/', async (req, res, next) => {
  
  const play = await models.Playbook.findAll({
    // get all post
    where: {
      coachId: req.session.coach.id,
    },
    include: [{model: models.Team, attributes: ['name', 'id']}]
  })
  res.json(play)
});



router.post('/', async (req, res) => {
  const { coach } = req.session;
  
  if (!coach) {
    return res.status(401).json({
      error: 'Not logged in',
    });
  }

  if (!req.body.playTitle || !req.body.playArt) {
    return res.status(400).json({
      error: 'Please include all fields'
    })
  }

  const play = await models.Playbook.create({
    name: req.body.playTitle,
    chart: req.body.playArt,
    TeamId: coach.team.id
  })

  res.status(201).json(play)
})

module.exports = router;