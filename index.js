const express = require('express');
const path = require('path');
const cool = require('cool-ascii-faces');  // Importing cool-ascii-faces

const PORT = process.env.PORT || 5001;

const app = express();

app.use(express.static(path.join(__dirname, 'public')))
   .set('views', path.join(__dirname, 'views'))
   .set('view engine', 'ejs')
   .get('/', (req, res) => res.render('pages/index'))
   .get('/cool', (req, res) => res.send(cool()));  // /cool route to send cool ASCII faces

app.listen(PORT, () => console.log(`Listening on ${PORT}`));