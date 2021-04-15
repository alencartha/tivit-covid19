/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


function NumberOfRecovered() {
    const [numberOfRecovered, setRecovered] = useState([]);

    useEffect(() => {
        fetch('https://disease.sh/v3/covid-19/all', {
          method: 'GET',
          mode:"cors"
        })
          .then((resp) => resp.json())
          .then((json) => setRecovered(json.recovered))
          .catch((error) => console.log(error));
      }, []);
    
    return (
      <CardContent>
        <section className="number-of-death">
          <Typography variant="center" component="center">
            <h3 style={{ fontSize: '18px' }}>
              Número de Recuperados
            </h3>
          </Typography>
          <Typography variant="center" component="center">
            <h3>{numberOfRecovered}</h3>
          </Typography>
        </section>
      </CardContent>
    );
  }
  
  export default NumberOfRecovered;
  