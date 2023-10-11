// Import required dependencies and modules
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const port = 5000; // You can choose any available port number

// Enable Cross-Origin Resource Sharing (CORS) using the cors middleware
app.use(cors());

// Define a route to fetch data from a public API
app.get("/api/data", async (req, res) => {
  try {
    const apiURL = "https://jsonplaceholder.typicode.com/users"; // Replace with your chosen API URL
    const response = await axios.get(apiURL);
    const data = response.data;
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching data from the API" });
  }
});

// Start the Express server on the specified port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
