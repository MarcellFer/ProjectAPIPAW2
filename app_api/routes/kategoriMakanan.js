// Mengimpor modul express untuk membuat router
const express = require('express');
// Membuat intance router dari express
const router = express.Router();

// Mengimpor controller kategori makanan untuk menangani logika bisnis
const kategoriMakananController = require('../controllers/kategoriMakananControllers');

// Mengatur rute GET untuk mendapatkan semua data kategori makanan
router.get('/', kategoriMakananController.getAllKategoriMakanan);
// Mengatur rute GET untuk mendapatkan kategori makanan berdasarkan id
router.get('/:id', kategoriMakananController.getKategoriMakananById);
// Mengatur rute POST untuk membuat kategori makanan baru
router.post('/', kategoriMakananController.createKategoriMakanan);
// Mengatur rute PUT untuk mengupdate kategori makanan berdasarkan id
router.put('/:id', kategoriMakananController.updateKategoriMakananById);
// Mengatur rute DELETE untuk menghapus kategori makanan berdasarkan id
router.delete('/:id', kategoriMakananController.deleteKategoriMakananById);

// Mengekspor router agar dapat digunakan di file lain (misalnya di app.js)
module.exports = router;
