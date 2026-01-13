// Mengimpor modul express untuk membuat router
const express = require('express');
// Membuat intance router dari express
const router = express.Router();

// Mengimpor controller asal makanan untuk menangani logika bisnis
const asalMakananController = require('../controllers/asalMakananControllers');

// Mengatur rute GET untuk mendapatkan semua data asal makanan (negara)
router.get('/', asalMakananController.getAllAsalMakanan);
// Mengatur rute GET untuk mendapatkan asal makanan berdasarkan id
router.get('/:id', asalMakananController.getAsalMakananById);
// Mengatur rute POST untuk membuat asal makanan baru
router.post('/', asalMakananController.createAsalMakanan);
// Mengatur rute PUT untuk mengupdate asal makanan berdasarkan id
router.put('/:id', asalMakananController.updateAsalMakananById);
// Mengatur rute DELETE untuk menghapus asal makanan berdasarkan id
router.delete('/:id', asalMakananController.deleteAsalMakananById);

// Mengekspor router agar dapat digunakan di file lain (misalnya di app.js)
module.exports = router;
