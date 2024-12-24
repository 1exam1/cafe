import React, { useState } from 'react';

const FilterCafes = ({ onFilterChange }) => {
    const list = [
        {
            name: "Арбатская",
            code: "Arbat",
        },
        {
            name: "Александровский сад",
            code: "Alexanders Garden",
        },
        {
            name: "Московская",
            code: "Moscow",
        },
        {
            name: "Парк Культуры",
            code: "Culture",
        },
        {
            name: "Театральная",
            code: "Theater",
        },
    ];

    const handleChange = (event) => {
        onFilterChange(event.target.value);
    };

    return (
        <div className="controls">
            <select name="subway" id="subway" onChange={handleChange}>
                <option value="All">Все</option>
                {list.map((i) => (
                    <option key={i.code} value={i.code}>{i.name}</option>
                ))}
            </select>
        </div>
    );
};

export default FilterCafes;
