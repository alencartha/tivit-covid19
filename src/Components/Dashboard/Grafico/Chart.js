import React, {useEffect, useState} from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';

export default function Chart() {
  const [dataContinent, setContinent] = useState("");
  const [dataCases, setCases] = useState([])

  const theme = useTheme();

  useEffect(() => {
    fetch('https://disease.sh/v3/covid-19/continents', {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((resp) => resp.text())
      .then((json) => {
        const data = json.continent;
        //const dataContinent = data.continent;
        //const dataCases = data.cases;
        //setContinent(dataContinent);
        //setCases(dataCases);
        console.log(data)
      })
      .catch((error) => console.log(error));
  }, []);

  function createData(continent, cases) {
    return { continent, cases };
  }
  
  const data = [
    createData(`${dataContinent}` ),
  ];

  console.log(data)
  return (
    <React.Fragment>
      <h2>Today</h2>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
              Sales ($)
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="amount" stroke={theme.palette.primary.main} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}