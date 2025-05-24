import axios from 'axios';

export const fetchStockData = async (ticker = 'AAPL', interval = 5) => {
  const response = await axios.get(\`http://localhost:3000/api/stocks?ticker=\${ticker}&interval=\${interval}\`);
  return response.data;
};

export const fetchCorrelationData = async (interval = 5) => {
  const response = await axios.get(\`http://localhost:3000/api/correlations?interval=\${interval}\`);
  return response.data;
};
