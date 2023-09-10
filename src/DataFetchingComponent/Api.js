import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetchingComponent() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Make an HTTP GET request to your backend API
    axios.get('/api/data') // Replace '/api/data' with your API endpoint
      .then((response) => {
        // Set the retrieved data in the state
        setData(response.data);
        setLoading(false); // Set loading to false
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false); // Set loading to false even in case of an error
      });
  }, []); // The empty dependency array ensures this effect runs only once when the component mounts.

  return (
    <div>
      <h2>Data from Backend API</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DataFetchingComponent;
