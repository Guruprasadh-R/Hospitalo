import { useEffect, useState } from 'react';
import { getPatients } from '../api';

function Patients() {
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        getPatients().then(data => setPatients(data));
    }, []);

    return (
        <div>
            <h1>Patients</h1>
            <ul>
                {patients.map((p) => (
                    <li key={p._id}>{p.name} - {p.age} years old - {p.disease}</li>
                ))}
            </ul>
        </div>
    );
}

export default Patients;
