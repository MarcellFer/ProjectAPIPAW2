// impor model Resep
const { get } = require('mongoose');
const resepSchema = require('../models/resep');

// fungsi untuk mengambil semua resep
const getAllResep = async (req, res) => {
    try {
        // mengambil semua resep dari database dengan populate referensi
        const result = await resepSchema.find()
            .populate('kategoriId', 'nama deskripsi')
            .populate('asalId', 'nama kodeNegara bendera');
        // mengirimkan respon berisi data resep dengan status 200 (OK)
        res.status(200).json(result);
    } catch (error) {
        // jika terjadi error, mengirimkan pesan error dengan status 500 (Internal Server Error)
        res.status(500).json({ message: error.message });
    }
};

// fungsi untuk mengambil resep berdasarkan param id
const getResepById = async (req, res) => {
    try {
        //get resep by id dengan populate referensi
        const result = await resepSchema.findById(req.params.id)
            .populate('kategoriId', 'nama deskripsi')
            .populate('asalId', 'nama kodeNegara bendera');
        if (!result) {
            //jika data resep tidak ditemukan
            res.status(404).json({ message: 'Resep not found' });
        } else {
            //jika data resep ada
            res.status(200).json(result);
        }
    }catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// fungsi untuk membuat resep baru
const createResep = async (req, res)=> {
    //buat instance resep baru
    const resep = new resepSchema({
        nama: req.body.nama,
        kategoriId: req.body.kategoriId,
        asalId: req.body.asalId,
        deskripsi: req.body.deskripsi,
        bahan: req.body.bahan,
        langkah: req.body.langkah,
        waktuMemasak: req.body.waktuMemasak,
        porsi: req.body.porsi,
        tingkatKesulitan: req.body.tingkatKesulitan
    })
    
    // simpan data resep ke dalam collection
    const hasil = await resep.save();
    //beri response json http_created dengan populate
    const populatedResult = await resepSchema.findById(hasil._id)
        .populate('kategoriId', 'nama deskripsi')
        .populate('asalId', 'nama kodeNegara bendera');
    res.status(201).json(populatedResult);
}

// fungsi untuk mengupdate resep berdasarkan param id
const updateResepById = async (req, res) => {
    try {
        //get resep by id
        const result = await resepSchema.findById(req.params.id);
        if (!result) {
            //jika data resep tidak ditemukan
            res.status(404).json({ message: 'Resep not found' });
        } else {
            //jika data resep ada
            //jika ada request perubahan nama
            if(req.body.nama != null){
                result.nama = req.body.nama;
            }
            //jika ada request perubahan kategoriId
            if(req.body.kategoriId != null){
                result.kategoriId = req.body.kategoriId;
            }
            //jika ada request perubahan asalId
            if(req.body.asalId != null){
                result.asalId = req.body.asalId;
            }
            //jika ada request perubahan deskripsi
            if(req.body.deskripsi != null){
                result.deskripsi = req.body.deskripsi;
            }
            //jika ada request perubahan bahan
            if(req.body.bahan != null){
                result.bahan = req.body.bahan;
            }
            //jika ada request perubahan langkah
            if(req.body.langkah != null){
                result.langkah = req.body.langkah;
            }
            //jika ada request perubahan waktuMemasak
            if(req.body.waktuMemasak != null){
                result.waktuMemasak = req.body.waktuMemasak;
            }
            //jika ada request perubahan porsi
            if(req.body.porsi != null){
                result.porsi = req.body.porsi;
            }
            //jika ada request perubahan tingkatKesulitan
            if(req.body.tingkatKesulitan != null){
                result.tingkatKesulitan = req.body.tingkatKesulitan;
            }
            //update data resep
            const updatedResep = await result.save();
            //populate referensi sebelum response
            const populatedResult = await resepSchema.findById(updatedResep._id)
                .populate('kategoriId', 'nama deskripsi')
                .populate('asalId', 'nama kodeNegara bendera');
            res.status(200).json(populatedResult);
        }
    }catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// fungsi untuk menghapus resep berdasarkan param id
const deleteResepById = async (req, res) => {
    try {
        //get resep by id
        const result = await resepSchema.findById(req.params.id);
        if (!result) {
            //jika data resep tidak ditemukan
            res.status(404).json({ message: 'Resep not found' });
        } else {
            //jika data resep ada, maka hapus data berdasarkan id
            await result.deleteOne();
            res.status(200).json({message: 'Resep berhasil dihapus' });
        }
    }catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// export
module.exports = { 
    getAllResep, 
    getResepById, 
    createResep, 
    updateResepById, 
    deleteResepById 
};
