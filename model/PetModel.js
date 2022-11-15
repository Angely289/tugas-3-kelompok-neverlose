import { Sequelize } from 'sequelize';
import db from '../config/Database.js';

const { DataTypes } = Sequelize;

const Pet = db.define('pet', {
    kategori: DataTypes.STRING,
    nama: DataTypes.STRING,
    rating: DataTypes.FLOAT,
    deskripsi: DataTypes.STRING,
    jumlah_terjual: DataTypes.INTEGER,
    harga: DataTypes.STRING,
}, {
    freezeTableName: true
});

export default Pet;

(async() => {
    await db.sync();
})();