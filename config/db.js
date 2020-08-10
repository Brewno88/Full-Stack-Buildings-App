const mongoose = require('mongoose');

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(
			process.env.DB_URI,
			// ||
			// 	'mongodb://user:Lupp0l0@ds263656.mlab.com:63656/heroku_8dcgz6ct',
			{
				useNewUrlParser: true,
				useUnifiedTopology: true,
				useFindAndModify: false,
				useCreateIndex: true,
			}
		);
		console.log(
			`MongoDB connected ${conn.connection.host}`.cyan.underline.bold
		);
	} catch (err) {
		console.log(`Error: ${err.message}`.red);
		process.exit(1);
	}
};

module.exports = connectDB;
