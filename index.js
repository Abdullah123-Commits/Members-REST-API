//                                       Creating simple express server and API (CRUD)
const express = require('express');
const path = require('path');
const logger = require('./middle-ware/middleware');
const members = require('./Members');
const exphbs = require('express-handlebars');

const PORT = process.env.PORT || 5000;
const app = express();



// INIT MiddleWare
// app.use(logger); // DONT WANNA USE RIGHT NOW

// Handlebars Middleware
// in newer version of hbs we first have to create an object of the class 'exphbs'
const hbs = exphbs.create({ defaultLayout: 'main' });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Body Parser Middle-ware
app.use(express.json());
app.use(express.urlencoded( {extended: false }));

// Homepage route
app.get('/', (req, res) => res.render('index',
    { 
        title: 'Member App',
        members
    }
));


// initially we did not make any route so server can't reply for the get request 
// // handling route via app.get()
// app.get('/', (req, res) => {
//     res.send('<h1>Hello World !</h1>');
// });

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

//members API Routes
app.use('/api/members', require('./routes/api/members'));



app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

