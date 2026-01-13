// mengimpor modul mongoose untuk mengelola skema dan model MongoDB
const mongoose = require('mongoose');

// Definisi skema untuk koleksi 'KategoriMakanan'
const kategoriMakananSchema = new mongoose.Schema({
    // field untuk nama kategori makanan
    nama: {
        type: String, // tipe data string
        required: true, // wajib diisi
        trim: true // menghapus spasi di awal dan akhir
    },
    // field untuk deskripsi kategori
    deskripsi: {
        type: String,
        trim: true
    },
    // field untuk menyimpan tanggal pembuatan dokumen
    createdAt: {
        type: Date, // tipe data tanggal
        default: Date.now //Default adalah waktu saat dokumen dibuat
    }
});

// Buat model KategoriMakanan berdasarkan skema yang telah didefinisikan
const kategoriMakanan = mongoose.model('kategoriMakanan', kategoriMakananSchema);

// mengekspor model KategoriMakanan agar dapat digunakan di bagian lain aplikasi
module.exports = kategoriMakanan;
