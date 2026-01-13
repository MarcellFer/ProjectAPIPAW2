// Mengimpor modul express untuk membuat router
const express = require('express');
// Membuat intance router dari express
const router = express.Router();

// Mengimpor controller resep untuk menangani logika bisnis
const resepController = require('../controllers/resepControllers');

// Mengatur rute GET untuk mendapatkan semua data resep
router.get('/', resepController.getAllResep);
// Mengatur rute GET untuk mendapatkan resep berdasarkan id
router.get('/:id', resepController.getResepById);
// Mengatur rute POST untuk membuat resep baru
router.post('/', resepController.createResep);
// Mengatur rute PUT untuk mengupdate resep berdasarkan id
router.put('/:id', resepController.updateResepById);
// Mengatur rute DELETE untuk menghapus resep berdasarkan id
router.delete('/:id', resepController.deleteResepById);

// Mengekspor router agar dapat digunakan di file lain (misalnya di app.js)
module.exports = router;
