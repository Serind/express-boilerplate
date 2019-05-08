import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import helmet from 'helmet';
import expressValidator from 'express-validator';
import cors from 'cors';

// local
require('./config/db');
import config from './config';

const app = express();

app.use(helmet({
  dnsPrefetchControl: { allow: true },
  frameguard: { action: 'deny' },
  hidePoweredBy: true,
  hsts: { maxAge: 5184000 },
  noCache: true,
  noSniff: true,
  xssFilter: true
}));
app.use(cors());
app.use(bodyParser.json());        // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({    // to support URL-encoded bodies
  extended: true
}));
app.use(expressValidator());
app.use(morgan('combined'));

// api prefix
app.api_prefix = '/api/v1';

// routes
require('./app/routes/')(app);

// http server
if (!module.parent) {
  const port = config.port;
  app.listen(port, () => console.log(`App listening on port ${port}!`));
}

module.exports = app;
