import React, { useState, useEffect } from "react";

function ContinentAsia() {
  const [casesContinent, setCasesContinent] = useState([]);
  const [nameContinent, setNameContinent] = useState([]);

  const confirmedNumberCases = () => {
    fetch("https://disease.sh/v3/covid-19/continents/asia", {
      method: "GET",
      mode: "cors"
    })
      .then((response) => response.json())
      .then((json) => setCasesContinent(json.cases))
      .catch((error) => console.log(error));
  };
  console.log('Number of cases')
  console.log(confirmedNumberCases())

  useEffect(() => confirmedNumberCases(), []);

  const nameContinentAsia = () => {
    fetch("https://disease.sh/v3/covid-19/continents/asia", {
      method: "GET",
      mode: "cors"
    })
      .then((response) => response.json())
      .then((json) => setNameContinent(json.continent))
      .catch((error) => console.log(error));
  };
  console.log('Name of continent')
  console.log(nameContinentAsia())

  useEffect(() => nameContinentAsia(), []);

  return (
    <div className="data-continent">
      <h3>{casesContinent}</h3>
      <h3>{nameContinent}</h3>
    </div>
  );
}

export default ContinentAsia;
