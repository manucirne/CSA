const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const bodyParser = require('body-parser')

var server = null;

function start(api_receitas,api_colheitas,api_user, repository, callback){
    const app = express();
    app.use( bodyParser.json() );       // to support JSON-encoded bodies
    app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
        extended: true
    })); 

    app.use(morgan('dev'));
    app.use(helmet());
    app.use((err, req, res, next) => {
      callback(new Error('Something went wrong!, err:' + err),null);
      res.status(500).send('Something went wrong!');
    })
    api_receitas(app, repository);
    api_colheitas(app,repository);
    api_user(app,repository);
    server = app.listen(parseInt(process.env.PORT), () =>
callback(null, server));
}
function stop(){
  if(server) server.close();
  return true;
}
module.exports = { start, stop }