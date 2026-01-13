// impor model AsalMakanan
const { get } = require('mongoose');
const asalMakananSchema = require('../models/asalMakanan');

// fungsi untuk mengambil semua asal makanan (negara)
const getAllAsalMakanan = async (req, res) => {
    try {
        // mengambil semua asal makanan dari database
        const result = await asalMakananSchema.find();
        // mengirimkan respon berisi data asal makanan dengan status 200 (OK)
        res.status(200).json(result);
    } catch (error) {
        // jika terjadi error, mengirimkan pesan error dengan status 500 (Internal Server Error)
        res.status(500).json({ message: error.message });
    }
};

// fungsi untuk mengambil asal makanan berdasarkan param id
const getAsalMakananById = async (req, res) => {
    try {
        //get asal makanan by id
        const result = await asalMakananSchema.findById(req.params.id);
        if (!result) {
            //jika data asal makanan tidak ditemukan
            res.status(404).json({ message: 'Asal Makanan not found' });
        } else {
            //jika data asal makanan ada
            res.status(200).json(result);
        }
    }catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// fungsi untuk membuat asal makanan baru
const createAsalMakanan = async (req, res)=> {
    //buat instance asal makanan baru
    const asalMakanan = new asalMakananSchema({
        nama: req.body.nama,
        kodeNegara: req.body.kodeNegara,
        deskripsi: req.body.deskripsi
    })
    
    // simpan data asal makanan ke dalam collection
    const hasil = await asalMakanan.save();
    //beri response json http_created
    res.status(201).json(hasil);
}

// fungsi untuk mengupdate asal makanan berdasarkan param id
const updateAsalMakananById = async (req, res) => {
    try {
        //get asal makanan by id
        const result = await asalMakananSchema.findById(req.params.id);
        if (!result) {
            //jika data asal makanan tidak ditemukan
            res.status(404).json({ message: 'Asal Makanan not found' });
        } else {
            //jika data asal makanan ada
            //jika ada request perubahan nama
            if(req.body.nama != null){
                result.nama = req.body.nama;
            }
            //jika ada request perubahan kode negara
            if(req.body.kodeNegara != null){
                result.kodeNegara = req.body.kodeNegara;
            }
            //jika ada request perubahan deskripsi
            if(req.body.deskripsi != null){
                result.deskripsi = req.body.deskripsi;
            }
            //update data asal makanan
            const updatedAsalMakanan = await result.save();
            res.status(200).json(updatedAsalMakanan);
        }
    }catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// fungsi untuk menghapus asal makanan berdasarkan param id
const deleteAsalMakananById = async (req, res) => {
    try {
        //get asal makanan by id
        const result = await asalMakananSchema.findById(req.params.id);
        if (!result) {
            //jika data asal makanan tidak ditemukan
            res.status(404).json({ message: 'Asal Makanan not found' });
        } else {
            //jika data asal makanan ada, maka hapus data berdasarkan id
            await result.deleteOne();
            res.status(200).json({message: 'Asal Makanan berhasil dihapus' });
        }
    }catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// export
module.exports = { 
    getAllAsalMakanan, 
    getAsalMakananById, 
    createAsalMakanan, 
    updateAsalMakananById, 
    deleteAsalMakananById 
};
