'use strict';

const mongoose = require('mongoose');

// Require your model

// Mongoose Server URI
const MONGOOSE_URI = 'mongodb+srv://coreychang808:volcomer123@cluster0-vlr04.mongodb.net/test?retryWrites=true&w=majority';

// Connect
mongoose.connect(MONGOOSE_URI,{useNewUrlParser})

// Do some work

// Disconnect
mongoose.disconnect();