import React, { useState } from 'react';

const Analytics = ({ backendUrl }) => {
  const [shortIdForAnalytics, setShortIdForAnalytics] = useState("");
  const [analytics, setAnalytics] = useState(null);

  const handleFetchAnalytics = async () => {
    if (!shortIdForAnalytics) {
      alert("Please enter a shortId to fetch analytics.");
      return;
    }

    try {
      const response = await fetch(`${backendUrl}/url/analytics/${shortIdForAnalytics}`);
      if (!response.ok) {
        const errorData = await response.json();
        alert(errorData.error || "Error fetching analytics");
        return;
      }
      const data = await response.json();
      setAnalytics(data);
    } catch (error) {
      console.error("Error fetching analytics:", error);
    }
  };

  return (
    <div>
      <h2>Fetch Analytics</h2>
      <input
        type="text"
        placeholder="Enter Short ID"
        value={shortIdForAnalytics}
        onChange={(e) => setShortIdForAnalytics(e.target.value)}
      />
      <br />
      <button onClick={handleFetchAnalytics}>Get Analytics</button>
      {analytics && (
        <div style={{ marginTop: '16px' }}>
          <p><strong>Total Clicks:</strong> {analytics.totalClicks}</p>
          {analytics.analytics && analytics.analytics.length > 0 && (
            <table className="table">
              <thead>
                <tr>
                  <th>Click #</th>
                  <th>Timestamp (ms)</th>
                </tr>
              </thead>
              <tbody>
                {analytics.analytics.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.timestamp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
};

export default Analytics;
