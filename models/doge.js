const mongoose = require('mongoose');
const dogSchema = new mongoose.Schema(
	{
		name: {type: String, required: true},
		breed: String,
		weight: Number,
		favoriteFood: String

})

module.exports = mongoose.model('Doge', dogSchema);
// const dogs = [
// 	{
// 		breed: 'corgi',
// 		name: 'max',
// 		weight: 30,
// 		favoriteFood: 'kibbles'
// 	},
// 	{
// 		breed: 'bern',
// 		name: 'murphy',
// 		weight: 90,
// 		favoriteFood: 'chipotle'
// 	},
// 	{
// 		breed: 'golden',
// 		name: 'rocky',
// 		weight: 60,
// 		favoriteFood: 'strawberries'
// 	}
// ]
