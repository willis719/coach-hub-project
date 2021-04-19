var express = require('express');
const checkAuth = require('../auth/checkAuth');
var router = express.Router();
const models = require('../models')

router.get('/', async (req, res, next) => {
  
    const player = await models.Player.findAll({
      // get all post
      where: {
          CoachId: req.session.coach.id,
      },
      include: [{model: models.Team, attributes: ['name', 'id']}],
    })
    res.json(player)
  });



  module.exports = router;
