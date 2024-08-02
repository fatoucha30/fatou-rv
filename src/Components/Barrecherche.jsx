// src/components/Barrecherche.jsx
import React from 'react';
import  { useState } from 'react';

const Barrecherche = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
        onSearch(event.target.value);
    };

    return (
        <input className='bg-black w-3/4 p-5 border-7 rounded-full h-full'
            type="text"
            placeholder="Rechercher..."
            value={searchTerm}
            onChange={handleChange}
        />
    );
};

export default Barrecherche;
