# Weather-Journal App Project

## Table of Contents

* [Description](#description)
* [Usage](#usage)
* [Development](#development)

## Description

This project is an asynchronous web application that uses Web API and user data to dynamically update the UI of a Weather-Journal app.

## Usage

1. Enter the five numbers' Zip code for any city in the USA.

2. Enter a word or a sentence that describes your feeling.

3. Click on the Generate button to see results.

## Development

- Setting up the project environment by installing Node, Installing the packages Express, Body-Parser, and Cors and then requiring and including them in server.js file.

- Ensuring that the server is running on the port that chosen by running server.js file using node in the terminal.

- On the server side setting up a GET route that returns the projectData object and a POST route that used to receive data from the request body and add this data to the projectData object.

- Acquiring API credentials from OpenWeatherMap website Using my credentials and the base url, make a GET request to the OpenWeatherMap API and call the async GET request as the callback function of the addEventListener method called on the generate button.

- Making a POST request to add the API data and the data entered by the user to the app.

- Updating the UI dynamically by retrieving data from the app, selecting the targeted elements on the DOM and then updating their values.
