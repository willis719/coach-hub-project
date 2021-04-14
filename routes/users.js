var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


// Coach Register
router.post('/register', async (req, res) => {
  // check for username and password on request
  if (!req.body.email || !req.body.password) {
    // add a return so that it stops if condition is met
    return res.status(400).json({               
      error: 'Please include username and password'
    })
  }

  // check database for existing user
  // Nothing after this runs until this is finished
  const coach = await models.Coach.findOne({
    where: {
      email: req.body.email
    }
  })
    
  // if exists, send error
  if (coach) {
    return res.status(400).json({
      error: 'Email already in use'
    })
  }

  
  // hash password
  const hash = await bcrypt.hash(req.body.password, 10)

  // create user
  const newCoach = await models.Coach.create({
    email: req.body.email,
    password: hash
  })

  // respond with success message
  return res.status(201).json(newCoach)
});


// Coach Login
router.post('/login', async (req, res) => {
  // check for username and password
  // If not there send error
  if (!req.body.email || !req.body.password) {
    // add a return so that it stops if condition is met
    return res.status(400).json({               
      error: 'Please include email and password'
    })
  }

  // find user from username
  const coach = await models.Coach.findOne({
    where: {
      email: req.body.email
    }
  })

  // if no user, send error
  if (!coach) {
    return res.status(404).json({
      error: 'No coach with that username found'
    })
  }


  // check password
  // checks that req.body.password matches the user password
  const match = await bcrypt.compare(req.body.password, coach.password)
  // if no match, send error
  if (!match) {
    return res.status(401).json({
      error: 'Password incorrect'
    })
  }

  // store user info in session
  req.session.coach = coach;

  // shorter way to do what starts on line 96
  // const userResponse = user;
  // delete user.password

  // respond with user info
  res.json({
    id: coach.id,
    email: coach.email,
    updatedAt: coach.updatedAt,
  })
});

module.exports = router;
