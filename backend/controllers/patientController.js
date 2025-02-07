import Patient from '../models/Patient.js';

export const getPatients = async (req, res) => {
    try {
        const patients = await Patient.find();
        res.json(patients);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const addPatient = async (req, res) => {
    const { name, age, disease } = req.body;
    const newPatient = new Patient({ name, age, disease });

    try {
        await newPatient.save();
        res.status(201).json(newPatient);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
