/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

function NumberOfDeath() {
    const [numberOfDeath, setDeath] = useState([]);
    

    useEffect(() => {
      fetch('https://disease.sh/v3/covid-19/all', {
        method: 'GET',
        mode:"cors"
      })
        .then((resp) => resp.json())
        .then((json) => setDeath(json.deaths))
        .catch((error) => console.log(error));
    }, []);
   
    return (
      <CardContent>
        <section className="number-of-death">
          <Typography variant="center" component="center">
            <h3>Número de Mortes:</h3>
          </Typography>
          <Typography variant="center" component="center">
            <h3>{numberOfDeath}</h3>
          </Typography>
        </section>
      </CardContent>
    );
  }
  
  export default NumberOfDeath;