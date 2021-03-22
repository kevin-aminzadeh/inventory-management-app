// Third-Party Module Imports
const path = require('path');
const express = require('express');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const expressHandlebars = require('express-handlebars');

// Initialize Routes
const routes = require('./routes');

// Initialize Helpers
const helpers = require('./utils/helpers');

// Initialize DB Connection
const sequelize = require('./config/connection');

// Initialize Server
const app = express();

// Initialize Port
const PORT = process.env.PORT || 3001;

// Initialize Session Config
const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

// Initialize Handlebars
const handlebars = expressHandlebars.create({ helpers });

// Implement Session Handling
app.use(session(sess));

// Configure Express View Engine
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

// Configure Incoming Request Payload Parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure Static Asset Path
app.use(express.static(path.join(__dirname, 'public')));

// Implement Router
app.use(routes);

// Synchronize Models with DB
// NOTE: DO NOT USE "force: true" IN PRODUCTION.
// This option adds a "DROP TABLE IF EXISTS" statement before trying to create the tables. (Existing tables will be overwritten);
sequelize.sync({ force: true }).then(() => {
  // Start Server
  app.listen(PORT, () =>
    console.log(`Server now listening on http://localhost:${PORT}`)
  );
});
