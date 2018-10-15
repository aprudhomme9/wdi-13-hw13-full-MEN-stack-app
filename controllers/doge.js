const express = require('express');
const router = express.Router();

const Doge = require('../models/doge');


router.get('/', (req, res) => {
	Doge.find({}, (err, allDogs) => {
		if(err) {
			console.log(err);
		} else {
			res.render('index.ejs', {
				dogs: allDogs
			})
		}
	})
})
// new dog
router.get('/new', (req, res) => {
	res.render('new.ejs', {
		dogs: Doge
	})
})

router.post('/', (req, res) => {
	Doge.create(req.body, (err, createdDog) => {
		if(err) {
			console.log(err);
		} else {
			res.redirect('/doge')
		}
	})
})

router.get('/:index', (req, res) => {
	Doge.findById(req.params.index, (err, foundDog) => {
		if(err) {
			console.log(err);
		} else {
			res.render('show.ejs', {
				dog: foundDog,
				index: foundDog.id
			})
		}
	})
})

router.delete('/:index', (req, res) => {
	Doge.findByIdAndRemove(req.params.index, (err, removedDog) => {
		res.redirect('/doge');
	})
})

router.get('/:index/edit', (req, res) => {
	Doge.findById(req.params.index, (err, foundDog) => {
		if(err) {
			console.log(err);
		} else {
			res.render('edit.ejs', {
				dog: foundDog,
				id: foundDog.id
			})
		}
	})
})


module.exports = router;