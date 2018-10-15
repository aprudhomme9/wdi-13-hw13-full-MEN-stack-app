const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost/fruit';

mongoose.connect(connectionString);

mongoose.connection.on('connected', () => {
	console.log('Mongoose connected');
})

mongoose.connection.on('disconnected', () => {
	console.log('Mongoose disconnected');
})

mongoose.connection.on('error', () => {
	console.log('Mongoose error');
})