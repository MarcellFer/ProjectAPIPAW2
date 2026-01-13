const index = (req, res) => {
    res.render('index', { title: 'Resep Makanan', layout: 'main' });
}

const about = (req, res) => {
    res.render('about', {title: "About Us", layout: "main"});
}

const contact = (req, res) => {
    res.render('contact', {title: "Contact Us", layout: "main"});
}

// get all kategori makanan
const kategoriMakanan = async (req, res) => {
    try {
        const response = await axios.get(`${API_URL}/kategoriMakanan`);
        const kategori = response.data;
        res.render('kategoriMakanan', {kategori, title: "Kategori Makanan", layout: "main"});
    } catch (error) {
        res.render('error', {message: 'Error fetching kategori makanan', error: error.message, layout: "main"});
    }
}

// get all asal makanan
const asalMakanan = async (req, res) => {
    try {
        const response = await axios.get(`${API_URL}/asalMakanan`);
        const asal = response.data;
        res.render('asalMakanan', {asal, title: "Asal Makanan", layout: "main"});
    } catch (error) {
        res.render('error', {message: 'Error fetching asal makanan', error: error.message, layout: "main"});
    }
}

// get all resep
const resep = async (req, res) => {
    try {
        const response = await axios.get(`${API_URL}/resep`);
        const resepData = response.data;
        res.render('resep', {resep: resepData, title: "Resep Makanan", layout: "main"});
    } catch (error) {
        res.render('error', {message: 'Error fetching resep', error: error.message, layout: "main"});
    }
}

module.exports = {index, about, contact, kategoriMakanan, asalMakanan, resep};