# README 

This Angular application is built using Nx and includes various libraries and tools to create a navigation-based web application. Below are the details of the libraries used and instructions on how to start the app.

## Used Libraries:

- **Angular**: The core framework for building the web application.
- **RxJS**: Used for handling asynchronous operations and managing data streams.
- **NgRx**: A state management library for managing application state in a reactive way.
- **AgGrid**: A data grid library for displaying tabular data.
- **Highcharts**: A charting library for creating interactive charts and graphs.
- **PrimeNg**: A UI component library for building rich and responsive user interfaces.
- **Nx**: A set of extensible dev tools for monorepos, which enhances the development experience.

## Getting Started:

1. Clone the repository.
2. Run `npm install` to install the project dependencies.
3. Run `nx build` to build the project.


## Running the App:

You can start the app using Nx by running the following command:

```bash
nx serve
```


This will build and serve the application, making it accessible at [http://localhost:4200](http://localhost:4200).

## Project Structure:

The application has the following project structure:

- **"Vessels" Page**: Displays vessel information in a grid.
- **"Emissions" Page**: Features a line chart displaying emission data for selected vessels. It allows switching between different vessels using a dropdown menu.

## Data Sources:

The application uses the following data sources:

- **Vessel Data**: [Vessel Data](https://frontendteamfiles.blob.core.windows.net/exercises/vessels.json)
- **Emission Data**: [Emission Data](https://frontendteamfiles.blob.core.windows.net/exercises/emissions.json)

