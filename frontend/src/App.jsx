import React from 'react';
import GenerateShortUrl from './components/GenerateShortUrl';
import Analytics from './components/Analytics';

function App() {
  const backendUrl = "http://localhost:8001";

  return (
    <div className="container">
      <h1>URL Shortener</h1>
      <hr />
      <GenerateShortUrl backendUrl={backendUrl} />
      <hr />
      <Analytics backendUrl={backendUrl} />
    </div>
  );
}

export default App;
