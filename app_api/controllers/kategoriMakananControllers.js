// impor model KategoriMakanan
const { get } = require('mongoose');
const kategoriMakananSchema = require('../models/kategoriMakanan');

// fungsi untuk mengambil semua kategori makanan
const getAllKategoriMakanan = async (req, res) => {
    try {
        // mengambil semua kategori makanan dari database
        const result = await kategoriMakananSchema.find().sort({nama : 1});
        // mengirimkan respon berisi data kategori makanan dengan status 200 (OK)
        res.status(200).json(result);
    } catch (error) {
        // jika terjadi error, mengirimkan pesan error dengan status 500 (Internal Server Error)
        res.status(500).json({ message: error.message });
    }
};

// fungsi untuk mengambil kategori makanan berdasarkan param id
const getKategoriMakananById = async (req, res) => {
    try {
        //get kategori makanan by id
        const result = await kategoriMakananSchema.findById(req.params.id);
        if (!result) {
            //jika data kategori makanan tidak ditemukan
            res.status(404).json({ message: 'Kategori Makanan not found' });
        } else {
            //jika data kategori makanan ada
            res.status(200).json(result);
        }
    }catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// fungsi untuk membuat kategori makanan baru
const createKategoriMakanan = async (req, res)=> {
    //buat instance kategori makanan baru
    const kategoriMakanan = new kategoriMakananSchema({
        nama: req.body.nama,
        deskripsi: req.body.deskripsi
    })
    
    // simpan data kategori makanan ke dalam collection
    const hasil = await kategoriMakanan.save();
    //beri response json http_created
    res.status(201).json(hasil);
}

// fungsi untuk mengupdate kategori makanan berdasarkan param id
const updateKategoriMakananById = async (req, res) => {
    try {
        //get kategori makanan by id
        const result = await kategoriMakananSchema.findById(req.params.id);
        if (!result) {
            //jika data kategori makanan tidak ditemukan
            res.status(404).json({ message: 'Kategori Makanan not found' });
        } else {
            //jika data kategori makanan ada
            //jika ada request perubahan nama
            if(req.body.nama != null){
                result.nama = req.body.nama;
            }
            //jika ada request perubahan deskripsi
            if(req.body.deskripsi != null){
                result.deskripsi = req.body.deskripsi;
            }
            //update data kategori makanan
            const updatedKategoriMakanan = await result.save();
            res.status(200).json(updatedKategoriMakanan);
        }
    }catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// fungsi untuk menghapus kategori makanan berdasarkan param id
const deleteKategoriMakananById = async (req, res) => {
    try {
        //get kategori makanan by id
        const result = await kategoriMakananSchema.findById(req.params.id);
        if (!result) {
            //jika data kategori makanan tidak ditemukan
            res.status(404).json({ message: 'Kategori Makanan not found' });
        } else {
            //jika data kategori makanan ada, maka hapus data berdasarkan id
            await result.deleteOne();
            res.status(200).json({message: 'Kategori Makanan berhasil dihapus' });
        }
    }catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// export
module.exports = { 
    getAllKategoriMakanan, 
    getKategoriMakananById, 
    createKategoriMakanan, 
    updateKategoriMakananById, 
    deleteKategoriMakananById 
};
