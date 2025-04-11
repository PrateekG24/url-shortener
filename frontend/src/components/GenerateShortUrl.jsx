import React, { useState } from 'react';

const GenerateShortUrl = ({ backendUrl }) => {
  const [longUrl, setLongUrl] = useState("");
  const [shortId, setShortId] = useState(null);

  const handleGenerateShortUrl = async () => {
    if (!longUrl) {
      alert("Please enter a URL.");
      return;
    }

    try {
      const response = await fetch(`${backendUrl}/url`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: longUrl }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        alert(errorData.error || "Error generating short URL");
        return;
      }

      const data = await response.json();
      setShortId(data.id);
    } catch (error) {
      console.error("Error generating short URL:", error);
    }
  };

  return (
    <div>
      <h2>Generate a New Short URL</h2>
      <input
        type="url"
        placeholder="Enter long URL"
        value={longUrl}
        onChange={(e) => setLongUrl(e.target.value)}
      />
      <br />
      <button onClick={handleGenerateShortUrl}>Generate</button>
      {shortId && (
        <div style={{ marginTop: '16px' }}>
          <p>Your short URL ID is: <strong>{shortId}</strong></p>
          <p>
            To visit, click here:{" "}
            <a className="link" href={`${backendUrl}/${shortId}`} target="_blank" rel="noopener noreferrer">
              {backendUrl}/{shortId}
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default GenerateShortUrl;
