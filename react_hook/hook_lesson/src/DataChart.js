import React, { useEffect, useState } from 'react';
import { Chart } from 'react-charts';

function DataChart({items}) {
   const [cities, setCities] = useState([]);
   
  useEffect(() =>
  {
      const currentCities = new Set ();
      items.forEach((item) => {})
  })

    useEffect(() => {
        items.forEach((item) => {
       cities.add(item.city);
        });
    },[]);
  
    let data = [];
  items.forEach((item) => {
    data.push([new Date(item.date), +item.amount]);
  });



  return (
    <div
      style={{
        width: '100%',
        height: '500px'
      }}
    >
      <Chart data={[
        {
          label: 'Minsk',
          data: data
        }
      ]} axes={[
        { primary: true, type: 'time', position: 'bottom' },
        { type: 'linear', position: 'left' }
      ]} />
    </div>
  );
}

export default DataChart;