import React, { useState, useEffect } from 'react';
import Menu from "./components/menu/menu";
import Posts from './components/pages/Posts/index';
import Loader from './components/loader';

function App() {
  const [loading, setLoading] = useState(true);
  const [apiRequests, setApiRequests] = useState(0);

  // Increment the count of ongoing API requests when the component mounts
  useEffect(() => {
    setApiRequests(2); // You might want to adjust this initial count based on your actual number of API requests
  }, []);

  // Function to decrement the count of ongoing API requests
  const apiRequestCompleted = () => {
    setApiRequests(prevRequests => prevRequests - 1);
  };

  useEffect(() => {
    // Check if all API requests are completed
    if (apiRequests === 0) {
      setLoading(false);
    }
  }, [apiRequests]);

  return (
    <div className="App">
      {loading ? (
        <Loader /> // Global loader
      ) : (
        <header className="App-header">
          {/* Your header content */}
          <Menu setLoading={setLoading} apiRequestCompleted={apiRequestCompleted} />
          <Posts setLoading={setLoading} apiRequestCompleted={apiRequestCompleted} />
        </header>
      )}
    </div>
  );
}

export default App;
