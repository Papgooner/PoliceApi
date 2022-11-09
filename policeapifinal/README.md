# Project Info
The live web app can be found at https://police-api.vercel.app/

This project fetches data from the UK Police Api. 
An initial selection of options is presented, created using the recieved Api data. 
The presented information will be updated based upon user input.

All data is unclassified. The API itself isn't great; it contains missing data and half complete entries among other problems,
so when browsing the app, if misspellings and/or missing data etc is found then that is the fault of the API and unfortunatley I 
cannot change anything about that. 

The app was made using Visual Studio Code, Node JS v16.15.1, and React JS v18.2.0.

## Running the app locally

React dependencies can be installed by using "npm i" in the policeapifinal directory. 
Once dependencies are installed, run the command "npm start" to run the app in development mode. 
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

If six high severity vulnerabilities are found, and they are not fixed by using "npm audit fix --force", then 
these warnings can be safely ignored. Visit "https://overreacted.io/npm-audit-broken-by-design/" for more information.
