import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import StockPage from './pages/StockPage';
import HeatmapPage from './pages/HeatmapPage';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';

const App = () => (
  <Router>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Stock Aggregator
        </Typography>
        <Button color="inherit" component={Link} to="/">Stock Page</Button>
        <Button color="inherit" component={Link} to="/heatmap">Heatmap</Button>
      </Toolbar>
    </AppBar>
    <Routes>
      <Route path="/" element={<StockPage />} />
      <Route path="/heatmap" element={<HeatmapPage />} />
    </Routes>
  </Router>
);

export default App;
