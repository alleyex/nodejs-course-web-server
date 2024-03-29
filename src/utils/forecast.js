const request = require('request');

const forecast = (latitude, longitude, callback) => {

  const url = `https://api.darksky.net/forecast/d7514066eef8f51421796a83117520cd/${latitude},${longitude}?unit=auto`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {

      callback('Unable to connect to weather service!', undefined);

    } else if (body.error) {

      callback('Unable to find location.', undefined);

    } else {

      callback(undefined, `${body.daily.data[0].summary} It is currently ${body.currently.temperature} degress out. There are a ${body.currently.precipProbability}% chance of rain.`);

    }
  });
};

module.exports = forecast;