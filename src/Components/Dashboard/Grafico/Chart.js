/* eslint-disable no-lone-blocks */
import { Paper } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { useStyles } from "../../Home/HomeStyle";
import clsx from "clsx";
import "../../../App.css";
import "./charts.css";

const Continent = () => {
  const [filterByCountry, setFilter] = useState([]);
  // const [data, setData] = useState([]);
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  useEffect(() => {
    fetch('https://disease.sh/v3/covid-19/continents', {
      method: 'GET',
      mode: 'cors',
    })
      .then((resp) => resp.json())
      .then((json) => setFilter(json))
      .catch((error) => console.log(error));
  }, []);
  
  return (
      <div>
      <Paper className={fixedHeightPaper}>

      <div className='container-table'>
        <table>
          <tbody>
            <tr>
              <th>Continente</th>
              <th className="data-continents">Número de Casos</th>
            </tr>
            {filterByCountry.map((data) => (
              <tr className="data-continents">
                <td className="data-continents">{data.continent}</td>
                <td className="data-continents">{(data.recovered).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table> 
      </div>
      </Paper>
      </div>
  );
};

export default Continent;
