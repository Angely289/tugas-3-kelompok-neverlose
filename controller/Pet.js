import Pet from '../model/PetModel.js';

export const getPet = async (req, res) => {
    try {
        // SELECT * FROM products
        const response = await Pet.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getPetById = async (req, res) => {
    try {
        // SELECT * FROM products WHERE id = ?
        const response = await Pet.findOne({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createPet = async (req, res) => {
    try {
        // INSERT
        await Pet.create(req.body);
        res.status(201).json({ msg: 'Pet Created'})
    } catch (error) {
        console.log(error.message);
    }
}

export const updatePet = async (req, res) => {
    try {
        await Pet.update(req.body, {
            where: {
                id: req.params.id,
            }, 
        });
        res.status(200).json({ msg: 'Pet Updated'});
    } catch (error) {
        console.log(error.message);
    }
}