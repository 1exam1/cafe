import React from "react";
import { useState, useEffect } from "react";

import FilterCafes from "./FilterCafes";


const CafesTable = () => {
  const [cafes, setCafes] = useState([]);
  const [filteredCafes, setFilteredCafes] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    console.log(filter)
    if (filter === "All") {
      setFilteredCafes(cafes);
    } else {
      setFilteredCafes(cafes.filter((cafe) => cafe.subwayCode.toLowerCase() === filter.toLowerCase()));
    }
  }, [filter, cafes]);

  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  useEffect(() => {
    const fetchCafes = async () => {
        try {
            const response = await fetch('http://localhost:3001/cafes'); // Запрос к API
            if (!response.ok) {
                throw new Error(`Ошибка: ${response.statusText}`);
            }
            const data = await response.json(); // Преобразование ответа в JSON
            setCafes(data.cafes); // Сохранение данных в состоянии
        } catch (err) {
            console.error(err.message); // Обработка ошибки
        }
    };

    fetchCafes(); // Вызов функции
}, []);

  return (
    <div className="cafesTable">
      <div className="controls">
        <FilterCafes onFilterChange={handleFilterChange} />
      </div>
      <ul className="cardsList">
        {filteredCafes.map((cafe) => (
                      <li key={cafe.id} className="card">
                          <img src={cafe.img || 'https://via.placeholder.com/150'} alt={cafe.name} />
                          <h2>{cafe.name}</h2>
                          <p>{cafe.description}</p>
                          <p>Адрес: {cafe.address}</p>
                          <p>Метро: {cafe.subway}</p>
                          <p>Время работы: {cafe.hours}</p>
                      </li>
                  ))}
      </ul>
    </div>
  )
};

export default CafesTable;