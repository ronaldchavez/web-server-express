const express = require('express')
const app = express();

const hbs = require('hbs');

require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use( express.static( __dirname + '/public' ) );

hbs.registerPartials(__dirname + '/views/partials');



app.set('view engine', 'hbs');
 
app.get('/', (req, res) => {

	let salida = {
		nombre: 'Ronald',
		edad: 25,
		url: req.url
	}

  	res.render('home',{
  		nombre: 'Ronald'
  	});
});

app.get('/about', (req, res) => {

	let salida = {
		nombre: 'Ronald',
		edad: 25,
		url: req.url
	}

  	res.render('about',{
  		nombre: 'Ronald'
  	});
});
 
app.listen(port, () => {
	console.log(`escuchando peticiones en el puerto ${port}`);
})