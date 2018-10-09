const express = require('express');
const logger = require('winston');
const app = express();
const port = 5000;

app.get('/', (request, response) => {
	response.send(`Hello, I'm alive`);
	logger.info('Responded to GET request on /')
});

app.get('/api/me', (request, response) => {
	response.send('{"name": "Hans Jørgen Whist", "location": "Teknologihuset"}');
	logger.info('Responded to GET request on /api/me')
});

app.get('/api/work', (request, response) => {
	response.send('[{"yearFrom": "2008", "yearTo": "2018", "place": "NEP MEdia Services", "comment": "Head of tech stuff Mediabank"}, {"yearFrom": "2009", "yearTo": "2010", "place": "The coffee shop", "comment": "Making coffee"}]');
	logger.info('Responded to GET request on /api/work')
});

app.get('/api/education', (request, response) => {
	response.send('[{"yearFrom": "2002", "yearTo": "2004", "place": "UMB", "comment": "MSc. Aquaculture"}, {"yearFrom": "1998", "yearTo": "2000", "place": "LIPA", "comment": "Pop Music and Sound Technology"}]');
	logger.info('Responded to GET request on /api/edu')
});

app.listen(port, (err) => {
  if (err) {
    return logger.error('something bad happened', err)
  }

  logger.info(`server is listening on ${port}`)
});
