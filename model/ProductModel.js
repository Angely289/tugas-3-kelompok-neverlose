import { Sequelize } from 'sequelize';
import db from '../config/Database.js';

const { DataTypes } = Sequelize;

const Product = db.define('product', {
    kategori: DataTypes.STRING,
    nama: DataTypes.STRING,
    rating: DataTypes.FLOAT,
    deskripsi: DataTypes.STRING,
    jumlah_terjual: DataTypes.INTEGER,
    harga: DataTypes.STRING,
}, {
    freezeTableName: true
});

export default Product;

(async() => {
    await db.sync();
})();