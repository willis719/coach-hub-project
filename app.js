var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session')
const sequelizeStore = require('connect-session-sequelize')(session.Store);
const models = require('./models')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const playRouter = require('./routes/playbook')
const playersRouter = require('./routes/players')

var app = express();

const store = new sequelizeStore({db: models.sequelize})
app.use(
    session({
      secret: 'pancakes',
      resave: false,
      saveUninitialized: false,
      store: store,
    })
   );
   store.sync();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client/build')));

app.use('/', indexRouter);
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/playbook', playRouter)
app.use('/api/v1/players', playersRouter)


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
})

module.exports = app;
