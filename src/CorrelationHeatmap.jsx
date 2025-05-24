import React from 'react';
import { Typography } from '@mui/material';

const CorrelationHeatmap = ({ data }) => {
  return (
    <div style={{ overflowX: 'auto' }}>
      <Typography variant="h6">Correlation Heatmap</Typography>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th></th>
            {data.map((row, i) => (
              <th key={i}>{row.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              <th>{row.name}</th>
              {row.correlations.map((val, j) => (
                <td key={j} style={{ 
                  backgroundColor: '',
                  color: '#fff',
                  textAlign: 'center',
                  padding: '4px'
                }}>
                  {val.toFixed(2)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CorrelationHeatmap;
