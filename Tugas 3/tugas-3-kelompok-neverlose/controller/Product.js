import Product from '../model/ProductModel.js';

export const getProduct = async (req, res) => {
    try {
        // SELECT * FROM product
        const response = await Product.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.messagge);
    }
}

export const getProductById = async (req, res) => {
    try {
        // SELECT * FROM product WHERE id = ?
        const response = await Product.findOne({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json(response);
    } catch (error) {
        console.log(error.messagge);
    }
}

export const createProduct = async (req, res) => {
    try {
        // INSERT
        await Product.create(req.body);
        res.status(201).json({ msg: 'Product Created'})
    } catch (error) {
        console.log(error.messagge);
    }
}

export const updateProduct = async (req, res) => {
    try {
        //Update
        await Product.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({ msg: 'Product Updated'});
    } catch (error) {
        console.log(error.messagge);
    }
}

export const deleteProduct = async (req, res) => {
    try {
        //Delete
        await Product.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({ msg: 'Product Deleted'})
    } catch (error) {
        console.log(error.messagge);
    }
}