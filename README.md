[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/ATV5e7Id)
# Link of the Game = https://gmt-458-web-gis.github.io/geogame-SelenAYD/
- # Guessing the Cities Located Between Two Cities Game

This project is a geographic game based on guessing the cities on the shortest route between two cities in Turkey. Players earn points as they correctly guess the provinces between the starting and target cities. The aim of the game is to find all cities correctly on the map.

## Project Concept

The user is shown two cities on the map of Turkey: a starting and a target city. The player guesses the cities located on the route between these two cities. The player is given points for each city guessed correctly and the player tries to guess all cities correctly.

## Requirements

### Interface Requirements

- **Map**: Shows the cities between the starting and target cities on the map of Turkey.
- **Starting and Target Cities**: The names of two randomly selected cities appear on the screen.
- **Score Indicator**: Shows the current score the user has collected as a result of correct guesses.
- **Guess Entry**: A field where the user can enter the city they guess and a "Guess" button.

### Functional Requirements

- **City Check**: Checks whether the entered city is between the starting and target cities.
- **Scoring System**: Adds points for each correct guess and updates the score.
- **Start New Game**: Starts a new game with another starting and target city.
- **Duration**: The aim of the game is to guess the most cities within 1 minute and reach the highest score.

## Interface Layout

- **Title**: The game title appears on the screen as "Guessing the Provinces Located Between Two Cities".
- **Map**: A map of Turkey created with OpenLayers.
- **Game Information**: Starting and target city information and the current score are displayed.
- **Guess Entry**: An input field where the user can write their city guess and a "Guess" button.
- **Time Screen**: The screen where the 1 minute time will be notified to the users. Therefore, the 1 minute counter will be on the screen.

## Libraries to be Used

- **OpenLayers**: It will be used for correct marking of cities on the map, interactive map visualization and user interaction.

![tasarım_oyun](https://github.com/user-attachments/assets/965d780a-74cd-4a99-819f-62bca7256bad)


## Event Handlers

### 1. Starting the Game and New Game (onClick)
This event is triggered when the "Start" button is clicked. The start screen is hidden, showing the game screen and timer. In addition, a new game is started and the necessary settings are made.

### 2. Timer Management (onTimer)
It keeps track of the time during the game and updates the remaining time every second. When the time reaches zero, it ends the game and reports the score. Timer management is a mechanism that constantly controls the progress of the game.

### 3. Prediction Control (onInput)
When a city name is entered, the prediction is checked. If the city entered is a valid and correct prediction, points are added and feedback is given. In case of a wrong or invalid prediction, an appropriate message is displayed

## Closure

### 1. Closure with Timer (startTimer, setInterval)
The startTimer function uses setInterval to update the remaining time every second. The setInterval function controls the time by accessing the timeLeft variable defined in the outer startTimer function. This structure provides secure access to variables using closures.

### 2. Closure with Score Tracking (makeGuess, score)
The makeGuess function updates the score variable in the game. The score is controlled and can only be changed by the makeGuess function. This closure ensures that the score is updated only under certain conditions.

### 3. Closure with Prediction Range Control (isBetweenCities, haversineDistance)
The isBetweenCities function uses haversineDistance to verify the predictions between two cities. haversineDistance accesses the startCity and endCity coordinates in the outer function. This structure allows complex calculations to be performed by accessing the outer data with closures.

## Interaction with the DOM 

### 1. Accessing Elements
In my game, DOM elements are accessed using getElementById to display information and retrieve data to the user during the game. Examples:

-"start-city" and "end-city": Used to display the names of randomly selected starting and ending cities to the user.
-"timer": Updated with a timer to display the remaining time.
-"score": Edited to display the user's current score on the screen.
-"feedback": Used to indicate whether the guesses are correct or incorrect.
-"guess": Used as an input field to get a guess from the user.

### 2. Updating DOM Elements
During the game, the text and states in the DOM are dynamically updated:

-textContent: Used to update the score, feedback, duration and selected city names.
-value: Used to clear the guess input field.
-disabled: Applied to buttons to disable or enable user inputs.

### 3. Interacting with DOM Events
The game manages user interactions using Event Listeners:

-"start-button": When the user clicks the "Start" button, it starts the game and loads a new game settings.

-"guess": When the user makes a guess in the input field, the guess is checked and feedback is provided.
