# URL Shortener MERN Project

A simple URL shortener application built with the MERN stack (MongoDB, Express, Node.js, React with Vite). This project allows you to generate short URLs for long URLs and track analytics on the URL usage.



## Overview

This project is a full-stack URL shortener application. Users can input a long URL to generate a short URL (an 8-character unique identifier) that redirects to the original URL. In addition, the project provides analytics that track how many times a short URL has been visited along with the timestamps of each visit.

## Features

- **URL Shortening:**  
  Generate a short URL ID for any provided long URL.
- **Redirection:**  
  Automatically redirect to the original URL when the short URL is visited.
- **Analytics Tracking:**  
  Record click history with timestamps, and display the total clicks and detailed log.

## Tech Stack

- **Backend:**
  - Node.js
  - Express
  - MongoDB with Mongoose
  - nanoid (for generating unique URL IDs)
  - CORS (Cross-Origin Resource Sharing)
- **Frontend:**
  - React (using Vite for fast development)
  - Plain CSS for styling



> **Note:** This project is configured to work on your local machine (localhost) for development purposes. It has not been deployed to a live production server yet. Use the provided instructions to run the project locally.


### Clone the Repository
1.  ```bash
    git clone https://github.com/PrateekG24/url-shortener.git

## Setup Instructions

### Backend Setup
1. **Navigate to the backend folder.
2. **Install dependencies:**
   ```bash
   npm install    
3. **Run the backend server:**
   ```bash
   node index.js
4. **Before running the backend, ensure you have MongoDB installed and running locally. If you need to change the connection URL (for example, if your MongoDB instance runs on a different port or uses authentication), update the connection string in index.js where connectToMongoDB is called.**
### Frontend Setup
1. **Navigate to the backend folder.**
   ```bash
   npm install
2. **Start the frontend development server.**
   ```bash
   npm run dev
