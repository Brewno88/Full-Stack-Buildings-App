const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
const path = require('path');

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
	.connect(process.env.DB_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
	})
	.then(() => console.log('Connected to MongoDB'))
	.catch(err => console.log(err));

const PORT = process.env.PORT || 5000;

// Routes
const buildingsRouter = require('./routes/buildings');
app.use('/api/buildings', buildingsRouter);

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
	// Set a static folder
	app.use(express.static('./client/build'));

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, './client', 'build', 'index.html'));
	});
}

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
app.get('/', (req, res) => {
	res.send('Homepage');
});
