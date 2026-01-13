// mengimpor modul mongoose untuk mengelola skema dan model MongoDB
const mongoose = require('mongoose');

// Definisi skema untuk koleksi 'Resep'
const resepSchema = new mongoose.Schema({
    // field untuk nama resep
    nama: {
        type: String, // tipe data string
        required: true, // wajib diisi
        trim: true // menghapus spasi di awal dan akhir
    },
    // field untuk kategori makanan (referensi ke KategoriMakanan)
    kategoriId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'kategoriMakanan',
        required: true
    },
    // field untuk asal makanan (referensi ke AsalMakanan)
    asalId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'asalMakanan',
        required: true
    },
    // field untuk deskripsi resep
    deskripsi: {
        type: String,
        trim: true
    },
    // field untuk bahan-bahan yang digunakan
    bahan: {
        type: [String], // array of string
        required: true
    },
    // field untuk langkah-langkah pembuatan
    langkah: {
        type: [String], // array of string
        required: true
    },
    // field untuk waktu memasak (dalam menit)
    waktuMemasak: {
        type: Number, // tipe data angka
        required: true
    },
    // field untuk jumlah porsi
    porsi: {
        type: Number,
        required: true
    },
    // field untuk tingkat kesulitan
    tingkatKesulitan: {
        type: String, // mudah, sedang, sulit
        enum: ['mudah', 'sedang', 'sulit'],
        default: 'sedang'
    },
    // field untuk menyimpan tanggal pembuatan dokumen
    createdAt: {
        type: Date, // tipe data tanggal
        default: Date.now //Default adalah waktu saat dokumen dibuat
    }
});

// Buat model Resep berdasarkan skema yang telah didefinisikan
const resep = mongoose.model('resep', resepSchema);

// mengekspor model Resep agar dapat digunakan di bagian lain aplikasi
module.exports = resep;
