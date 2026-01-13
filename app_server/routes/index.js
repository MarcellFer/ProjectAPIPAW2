var express = require('express');
var router = express.Router();

const mainController = require('../controllers/mainController');

/* GET home page. */
router.get('/', mainController.index);

// get about page
router.get('/about', mainController.about);

// get contact page
router.get('/contact', mainController.contact);

// get kategori makanan page
router.get('/kategoriMakanan', mainController.kategoriMakanan);

// get asal makanan page
router.get('/asalMakanan', mainController.asalMakanan);

// get resep page
router.get('/resep', mainController.resep);

module.exports = router;
