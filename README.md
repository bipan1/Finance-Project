## Stock Financial Data Viewer and Portfolio Manager

A React.js and TypeScript-based web application that utilizes the Financial Modelling Prep API to provide users with comprehensive financial data on various stocks. This is the frontend part of a .NET [.NET Project Link](https://github.com/bipan1/FinanceBackend) and React project, allowing users to view detailed financial data, manage their accounts, and create personal stock portfolios.

## Features
- User Authentication: Users can sign up, log in, and manage their accounts.
- Stock Data Visualization: Fetch and display real-time financial data of various stocks using the Financial Modelling Prep API.
- Personal Watchlist: Create and manage a personal watchlist of stocks.
- Responsive Design: Mobile-friendly interface using Tailwind CSS.
- State Management: Efficient state management using React Context API.
- Error Handling: Robust error handling for API requests.

## Technologies Used
- React.js: A JavaScript library for building user interfaces.
- TypeScript: A typed superset of JavaScript that compiles to plain JavaScript.
- Axios: A promise-based HTTP client for the browser and Node.js.
- React Context API: Provides a way to share values between components without having to explicitly pass props through every level of the tree.
- Tailwind CSS: A utility-first CSS framework for rapidly building custom user interfaces.
- Financial Modelling Prep API: Provides financial data and company information for stocks.
- Other Libraries: Additional libraries as needed for functionality and styling.
 
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## API Integration
This project uses the Financial Modelling Prep API to fetch real-time financial data for stocks. Ensure you have a valid API key from Financial Modelling Prep and add it to your .env file as described in the installation steps.

## Acknowledgments
- Financial Modelling Prep for providing the financial data API.
- React, TypeScript, and Tailwind CSS communities for their excellent documentation and resources.

