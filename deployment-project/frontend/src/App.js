import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/data`);
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
      setData({ message: 'Error connecting to backend' });
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Deployed App</h1>
        <button onClick={fetchData} disabled={loading}>
          {loading ? 'Loading...' : 'Refresh Data'}
        </button>
        
        {data && (
          <div className="data-container">
            <h2>Backend Response:</h2>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
        )}
        
        <div className="info">
          <p>Frontend URL: {window.location.origin}</p>
          <p>Backend API: {process.env.REACT_APP_API_URL}</p>
        </div>
      </header>
    </div>
  );
}

export default App;