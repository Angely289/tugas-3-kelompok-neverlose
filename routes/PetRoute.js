import express from 'express';
import {
    getPet,
    getPetById,
    createPet,
    updatePet,
    deletePet,
} from '../controller/Pet.js';

const router = express.Router();

router.get('/pet', getPet);
router.get('/pet/:id', getPetById);
router.post('/pet', createPet);
router.patch('/pet/:id', updatePet);
router.delete('/product/:id', deletePet);

export default router;