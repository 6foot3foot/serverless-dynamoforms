'use strict';

const vandium = require('vandium')

/*
* Simple code that reports the version of the api
*/
module.exports.version = vandium( function( event, context, callback ) {
  var version = JSON.parse(process.env.APP_VERSION);
  const response = {
    statusCode: 200,
    body: version.major + "." + version.minor + "." + version.revision
  };

  callback(null, response);

});

