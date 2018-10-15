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
// show route. renders show page at doge/:index
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
// delete route
router.delete('/:index', (req, res) => {
	Doge.findByIdAndRemove(req.params.index, (err, removedDog) => {
		res.redirect('/doge');
	})
})
// update route --> to edit page
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

router.put('/:index', (req, res) => {
	Doge.findByIdAndUpdate(req.params.index, req.body, (err, updatedDog) => {
		res.redirect('/doge');
	})
})

module.exports = router;