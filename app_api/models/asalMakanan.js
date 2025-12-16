// mengimpor modul mongoose untuk mengelola skema dan model MongoDB
const mongoose = require('mongoose');

// Definisi skema untuk koleksi 'AsalMakanan' (Negara/Bendera Asal Makanan)
const asalMakananSchema = new mongoose.Schema({
    // field untuk nama negara
    nama: {
        type: String, // tipe data string
        required: true, // wajib diisi
        trim: true // menghapus spasi di awal dan akhir
    },
    // field untuk kode negara (ISO 3166-1 alpha-2)
    kodeNegara: {
        type: String,
        trim: true
    },
    // field untuk bendera emoji
    bendera: {
        type: String,
        trim: true
    },
    // field untuk deskripsi
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

// Buat model AsalMakanan berdasarkan skema yang telah didefinisikan
const asalMakanan = mongoose.model('asalMakanan', asalMakananSchema);

// mengekspor model AsalMakanan agar dapat digunakan di bagian lain aplikasi
module.exports = asalMakanan;
