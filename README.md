# Node-React-Api-App

Node-React-Api-App is a simple web application that demonstrates how to create a Node.js server to fetch data from a public API and a React frontend to display that data. This README.md file will guide you through the step-by-step setup and running of the project.

## Setup

Follow these steps to set up the Node.js server and React frontend:

### Prerequisites

Make sure you have the following software installed on your system:

- Node.js: You can download it [here](https://nodejs.org/).
- npm: This comes with Node.js, so no need for a separate installation.

### 1. Clone the Repository

Clone the Node-React-Api-App repository to your local machine:

```bash
git clone https://github.com/auscode/Node-React-Api-App.git
```

### 2. Set Up the Node.js Server

Navigate to the `Node-React-Api-App` directory and follow these steps:

#### a. Configure the API URL

In the `server.js` file, replace the `apiURL` variable with the URL of the API you want to fetch data from:

```javascript
const apiURL = "https://jsonplaceholder.typicode.com/users"; // Replace with your chosen API URL
```

#### b. Start the Node.js Server

In the `server` directory, run the following command to start the Node.js server:

```bash
node server.js
```

The server will run on port 5000 by default.


### 3. Set Up the React Frontend

Navigate back to the root directory of the project and follow these steps:

#### a. Install Dependencies

```bash
cd client
npm install
npm install cors
```

#### b. Start the React Frontend

In the `client` directory, run the following command to start the React application:

```bash
npm start
```

The React app will run on port 3000 by default. You can access it in your web browser at [http://localhost:3000](http://localhost:3000).

## Usage

Once both the server and frontend are running, you can access the Node-React-Api-App in your web browser. The frontend will display data fetched from the specified API, and you can interact with it by clicking the "View Details" button on each data card to see additional information.

## Troubleshooting

- If you encounter any issues, make sure that both the server and frontend are running, and that the API URL is correctly configured in `server.js`.

That's it! You have successfully set up and run the Node-React-Api-App. You can now explore the data and customize it as needed for your own projects. Enjoy!
