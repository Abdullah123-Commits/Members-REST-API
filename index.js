//                                       Creating simple express server and API
const express = require('express');
const path = require('path');
const logger = require('./middle-ware/middleware');
const members = require('./Members');

const PORT = process.env.PORT || 5000;
const app = express();



// INIT MiddleWare
// app.use(logger); // DONT WANNA USE RIGHT NOW

// Body Parser Middle-ware
app.use(express.json());
app.use(express.urlencoded( {extended: false }));


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

