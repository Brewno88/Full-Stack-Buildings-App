const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
const path = require('path');
const colors = require('colors');

app.use(cors());
app.use(express.json());

// Connect to MongoDB
const connectDB = require('./config/db');
connectDB();

const PORT = process.env.PORT || 5000;

// Routes
const buildingsRouter = require('./routes/buildings');
app.use('/api/buildings', buildingsRouter);

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
	// Set a static folder
	// app.get('*', (req, res) =>
	// 	res.sendFile(path.join(__dirname, './client/build/index.html'))
	// );
	app.use(express.static('client/build'));
}

app.listen(PORT, () =>
	console.log(
		`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
	)
);
app.get('/', (req, res) => {
	res.send('API Homepage');
});
