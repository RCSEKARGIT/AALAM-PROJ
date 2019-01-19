import Express from 'express';
import compression from 'compression';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import path from 'path';

// Initialize the Express App
const app = new Express();

// Set Development modes checks
const isDevMode = process.env.NODE_ENV === 'development' || false;
const isProdMode = process.env.NODE_ENV === 'production' || false;

// Run Webpack dev server in development mode
if (isDevMode) {
  // Webpack Requirements
  // eslint-disable-next-line global-require
  const webpack = require('webpack');
  // eslint-disable-next-line global-require
  const config = require('../webpack.config.dev');
  // eslint-disable-next-line global-require
  const webpackDevMiddleware = require('webpack-dev-middleware');
  // eslint-disable-next-line global-require
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(config);
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
    watchOptions: {
      poll: 1000,
    },
  }));
  app.use(webpackHotMiddleware(compiler));
}

// React And Redux Setup
import { configureStore } from '../client/store';
import { Provider } from 'react-redux';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import Helmet from 'react-helmet';

// Import required modules
import routes from '../client/routes';
import { fetchComponentData } from './util/fetchData';
import posts from './routes/post.routes';
import dummyData from './dummyData';
import serverConfig from './config';

// Set native promises as mongoose promise
mongoose.Promise = global.Promise;

// MongoDB Connection
if (process.env.NODE_ENV !== 'test') {
  mongoose.connect(serverConfig.mongoURL, (error) => {
    if (error) {
      console.error('Please make sure Mongodb is installed and running!'); // eslint-disable-line no-console
      throw error;
    }

    // feed some dummy data in DB.
    dummyData();
  });
}

// Apply body Parser and server public assets and routes
app.use(compression());
app.use(bodyParser.json({ limit: '20mb' }));
app.use(bodyParser.urlencoded({ limit: '20mb', extended: false }));
app.use(Express.static(path.resolve(__dirname, '../dist/client')));
app.use('/api', posts);

// Render Initial HTML
const renderFullPage = (html, initialState) => {
  const head = Helmet.rewind();

  // Import Manifests
  const assetsManifest = process.env.webpackAssets && JSON.parse(process.env.webpackAssets);
  const chunkManifest = process.env.webpackChunkAssets && JSON.parse(process.env.webpackChunkAssets);

  return `
    <!doctype html>
    <html>
      <head>
        ${head.base.toString()}
        ${head.title.toString()}
        ${head.meta.toString()}
        ${head.link.toString()}
        ${head.script.toString()}

        ${isProdMode ? `<link rel='stylesheet' href='${assetsManifest['/app.css']}' />` : ''}
        <link href='https://fonts.googleapis.com/css?family=Lato:400,300,700' rel='stylesheet' type='text/css'/>
      
        <meta name="keywords" content="" />
        <meta name="description" content="" />
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <link rel="stylesheet" type="text/css" href="http://host7.viethwebhosting.com/~bbd1/css/jpanelmenu.css" />
        <link rel="stylesheet" type="text/css" href="http://host7.viethwebhosting.com/~bbd1/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" type="text/css" href="http://host7.viethwebhosting.com/~bbd1/_jquery/css/custom-theme/jquery-ui-1.9.2.custom.min.css" />
        <link rel="stylesheet" type="text/css" href="http://host7.viethwebhosting.com/~bbd1/_jquery/css/jquery.ui.potato.menu.css" />
        <link rel="stylesheet" type="text/css" href="http://host7.viethwebhosting.com/~bbd1/_jquery/css/fullcalendar.css" />
        <link rel="stylesheet" type="text/css" href="http://host7.viethwebhosting.com/~bbd1/_jquery/css/fullcalendar.print.css" media="print" />
        <script type="text/javascript" src="http://host7.viethwebhosting.com/~bbd1/_jquery/js/jquery-1.10.1.min.js"></script>
        <script type="text/javascript" src="http://host7.viethwebhosting.com/~bbd1/_jquery/js/jquery-migrate-1.2.1.min.js"></script>
        <script type="text/javascript" src="http://host7.viethwebhosting.com/~bbd1/_jquery/js/jquery-ui-1.9.2.custom.min.js"></script>
        <script type="text/javascript" src="http://host7.viethwebhosting.com/~bbd1/_jquery/js/jquery.jpanelmenu.min.js"></script>
        <!--[if lt IE 9]>
        <script type="text/javascript" src="http://host7.viethwebhosting.com/~bbd1/_jquery/js/html5shiv.js?ccccombo_breaker="></script>
        <script type="text/javascript" src="http://host7.viethwebhosting.com/~bbd1/_jquery/js/respond.min.js?ccccombo_breaker="></script>
        <script type="text/javascript" src="http://host7.viethwebhosting.com/~bbd1/_jquery/js/modernizr.custom.36944.js?ccccombo_breaker="></script>
        <![endif]-->
        <script type="text/javascript" src="http://host7.viethwebhosting.com/~bbd1/_jquery/js/fullcalendar.min.js"></script>
        <script type="text/javascript" src="http://host7.viethwebhosting.com/~bbd1/bootstrap/js/bootstrap.min.js"></script>
        <script type="text/javascript" src="http://host7.viethwebhosting.com/~bbd1/_jquery/js/_custom.js"></script>
        <link href="https://www.viethconsulting.com/_jquery/nivo/nivo-slider.css" media="screen" rel="stylesheet" type="text/css">
        <!-- Jake jquery bits -->
        <script type="text/javascript" src="http://host7.viethwebhosting.com/~bbd1/includes/functions/equal_height.js"></script>
        <script type="text/javascript" src="http://host7.viethwebhosting.com/~bbd1/includes/functions/formatPhoneLink.js"></script>
        <script type="text/javascript" src="http://host7.viethwebhosting.com/~bbd1/includes/functions/itemSlider.js"></script>
        <script type="text/javascript" src="http://host7.viethwebhosting.com/~bbd1/includes/functions/linkConverter.js"></script>
        <script type="text/javascript" src="http://host7.viethwebhosting.com/~bbd1/includes/functions/navPadder.js"></script>
        <script type="text/javascript" src="http://host7.viethwebhosting.com/~bbd1/includes/functions/user_image_hw_fix.js"></script>
        <script type="text/javascript" src="http://host7.viethwebhosting.com/~bbd1/includes/functions/vcenter.js"></script>
        <!-- Google fonts -->
        <link href='https://fonts.googleapis.com/css?family=Ubuntu|Ubuntu+Condensed|Open+Sans:400,700' rel='stylesheet' type='text/css'>
        <link href='https://fonts.googleapis.com/css?family=Roboto:400,300,500,700,900' rel='stylesheet' type='text/css'>
        <!-- Our style sheets -->
        <link rel="stylesheet" type="text/css" href="http://host7.viethwebhosting.com/~bbd1/css/style.css?combobreaker=1520023496"  />
        <script src="//html5shim.googlecode.com/svn/trunk/html5.js"></script>
        <style type="text/css">
           body{
           background-repeat: repeat;
           }
           .navbar-toggle{
           display: none;
           }
           .ie8mademedoit{
           margin-top: 20px;
           }
        </style>
        <link rel="shortcut icon" href="http://host7.viethwebhosting.com/~bbd1/images/favicons/Association_Website_Templates_Favicon16px.png">
        <link rel="icon" sizes="16x16" href="http://host7.viethwebhosting.com/~bbd1/images/favicons/Association_Website_Templates_Favicon16px.png">
        <link rel="icon" sizes="24x24" href="http://host7.viethwebhosting.com/~bbd1/images/favicons/Association_Website_Templates_Favicon24px.png">
        <link rel="icon" sizes="32x32" href="http://host7.viethwebhosting.com/~bbd1/images/favicons/Association_Website_Templates_Favicon32px.png">
        <link rel="icon" sizes="57x57" href="http://host7.viethwebhosting.com/~bbd1/images/favicons/Association_Website_Templates_Favicon57px.png">
        <link rel="icon" sizes="72x72" href="http://host7.viethwebhosting.com/~bbd1/images/favicons/Association_Website_Templates_Favicon72px.png">
        <link rel="icon" sizes="96x96" href="http://host7.viethwebhosting.com/~bbd1/images/favicons/Association_Website_Templates_Favicon96px.png">
        <link rel="icon" sizes="114x114" href="http://host7.viethwebhosting.com/~bbd1/images/favicons/Association_Website_Templates_Favicon114px.png">
        <link rel="icon" sizes="128x128" href="http://host7.viethwebhosting.com/~bbd1/images/favicons/Association_Website_Templates_Favicon128px.png">
        <link rel="icon" sizes="195x195" href="http://host7.viethwebhosting.com/~bbd1/images/favicons/Association_Website_Templates_Favicon195px.png">
        <link rel="apple-touch-icon" href="http://host7.viethwebhosting.com/~bbd1/images/favicons/Association_Website_Templates_Favicon57px.png">
        <link rel="apple-touch-icon" sizes="72x72" href="http://host7.viethwebhosting.com/~bbd1/images/favicons/Association_Website_Templates_Favicon72px.png">
        <link rel="apple-touch-icon" sizes="114x114" href="http://host7.viethwebhosting.com/~bbd1/images/favicons/Association_Website_Templates_Favicon114px.png">
     </head>
      
      
        </head>
      <body>
        <div id="root">${process.env.NODE_ENV === 'production' ? html : `<div>${html}</div>`}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
          ${isProdMode ?
          `//<![CDATA[
          window.webpackManifest = ${JSON.stringify(chunkManifest)};
          //]]>` : ''}
        </script>
        <script src='${isProdMode ? assetsManifest['/vendor.js'] : '/vendor.js'}'></script>
        <script src='${isProdMode ? assetsManifest['/app.js'] : '/app.js'}'></script>
      </body>
    </html>
  `;
};

const renderError = err => {
  const softTab = '&#32;&#32;&#32;&#32;';
  const errTrace = isProdMode ?
    `:<br><br><pre style="color:red">${softTab}${err.stack.replace(/\n/g, `<br>${softTab}`)}</pre>` : '';
  return renderFullPage(`Server Error${errTrace}`, {});
};

// Server Side Rendering based on routes matched by React-router.
app.use((req, res, next) => {
  match({ routes, location: req.url }, (err, redirectLocation, renderProps) => {
    if (err) {
      return res.status(500).end(renderError(err));
    }

    if (redirectLocation) {
      return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    }

    if (!renderProps) {
      return next();
    }

    const store = configureStore();

    return fetchComponentData(store, renderProps.components, renderProps.params)
      .then(() => {
        const initialView = renderToString(
          <Provider store={store}>
              <RouterContext {...renderProps} />
          </Provider>
        );
        const finalState = store.getState();

        res
          .set('Content-Type', 'text/html')
          .status(200)
          .end(renderFullPage(initialView, finalState));
      })
      .catch((error) => next(error));
  });
});

// start app
app.listen(serverConfig.port, (error) => {
  if (!error) {
    console.log(`AALAM is running on port: ${serverConfig.port}! Build something amazing!`); // eslint-disable-line
  }
});

export default app;
