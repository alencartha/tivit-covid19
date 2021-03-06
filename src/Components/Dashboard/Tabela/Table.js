/* eslint-disable no-lone-blocks */
import { Paper } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { useStyles } from "../../Home/HomeStyle";
import clsx from "clsx";
import "../../../App.css"

const Filter = () => {
  const [filterByCountry, setFilter] = useState([]);
  // const [data, setData] = useState([]);
  const [modal, setModal] = useState('Número de casos');
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  useEffect(() => {
    fetch('https://disease.sh/v3/covid-19/countries?yesterday=1&twoDaysAgo=0&sort=cases&allowNull=0', {
      method: 'GET',
      mode: 'cors',
    })
      .then((resp) => resp.json())
      .then((json) => setFilter(json))
      .catch((error) => console.log(error));
  }, []);

  const handleSelect = (e) => {
    setModal(e.target.value);
  };


  return (
    <>
     
      <h2>Informações específicas por País:</h2>
      <div>
          Filtrar por: <select value={modal} onChange={handleSelect} className='select'>
          <option>Número de casos</option>
          <option>Número de mortes</option>
          <option>Número de recuperados</option>
        </select>
      </div> <br/>
      <Paper className={fixedHeightPaper}>

      <div className='container-table'>
        {modal === 'Número de casos' ? (
          <table className='table-filter'>
            <tbody>
              <tr>
                <th className= "country-table">País</th>
                <th className= "country-table">Total de Casos</th>
              </tr>
              {filterByCountry.map((data) => (
                <tr>
                    <td>{data.country}</td>
                    <td>{(data.cases).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>

        ) : modal === 'Número de mortes' ? (
          <table className='table-filter'>
            <tbody>
              <tr>
                <th className= "country-table">País</th>
                <th className= "country-table">Número de Mortes</th>
              </tr>
              {filterByCountry.map((data) => (
                <tr>
                  <td>{data.country}</td>
                  <td>{(data.deaths).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : modal === 'Número de recuperados' ? (
          <table className='table-filter'>
            <tbody>
              <tr>
                <th className= "country-table">País</th>
                <th className= "country-table">Número de Recuperados</th>
              </tr>
              {filterByCountry.map((data) => (
                <tr>
                  <td>{data.country}</td>
                  <td>{(data.recovered).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <></>
        )}
      </div>
      </Paper>
      </>
  );
};

export default Filter;
