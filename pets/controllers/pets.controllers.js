import {
    getItem,
    listItems,
    addItem,
    editItem,
    deleteItem
} from '../models/pets.models.js';




export const getPet = (req, res) => {
    try {
        const resp = getItem(parseInt(req.params.id));
        res.status(200).json(resp);
    } catch (err) {
        res.status(500).send(err);
    }
}

export const listPets = (res) => {
    try {
        const resp = listItems();
        res.status(200).json(resp)
    } catch (err) {
        res.status(500).json(err)
    }
}

export const editPet = (res, req) => {
    try {
        const resp = editItem(parseInt(req.params.id), req.body);
        res.status(200).json(resp);
    } catch (err) {
        res.status(500).send(err);
    }
}

export const addPet = (req, res) => {
    try {
        const resp = addItem(req.body);
        res.status(200).json(resp);
    } catch (err) {
        res.status(500).send(err);
    }
}

export const deletePet = (res, req) => {
    try {
        const resp = deleteItem(parseInt(req.params.id));
        res.status(200).json(resp);
    } catch (err) {
        res.status(500).send(err);
    }
}