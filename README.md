<div align="center">

# WEEDLE: Daily Pokemon Guessing Game

</div>

### Overview

Weedle is a web-based, interactive guessing game inspired by the popular word-guessing game, Wordle, but it’s all about Pokémon! Players must guess a randomly selected Pokémon by comparing various traits such as name, generation, types, and color. The game gives the player up to eight attempts to guess the correct Pokémon, with each guess providing feedback on how close they are. The aim is to make the game both fun and educational for Pokémon fans and casual gamers alike.

<h4>User Interface as of November 2024:</h4>

<div align="center">

<img src="https://i.postimg.cc/dVB7V48s/Screenshot-2024-11-15-at-11-00-30-AM.png" width="600px">

</div>
<br/>

11/15/24 update: Still in development, but working demo will soon be pushed live

### Gameplay Mechanics

Each round (and when randomize button is clicked), a random Pokémon is chosen as the target.
The player has up to eight attempts to guess the correct Pokémon based on a series of clues.
For each guess, the game compares the selected Pokémon’s traits (such as type, generation, and color with the target Pokémon.
The player gets immediate feedback on each guess, helping them refine their next attempt.
The player’s goal is to guess the correct Pokémon in as few tries as possible.

### Categories and Feedback Criteria

Name: Highlighted in green when there is an exact match.
Pokedex Number: Highlighted in yellow when the difference in numbers is within ±30.
Generation: Highlighted in green when the generation matches exactly, and in yellow when the difference is ±1.
Types: Highlighted in green if both types match (including "none" as a valid secondary type), and in yellow if only one type matches.
Color: Highlighted in green if the color matches exactly.

### Planned Updates and Future Goals

- All generations will be implemented, as well as the functionality for the user to select the range of generations they would like to play within.
- Reworking the categories and narrow-down process in general to make the product even more fun.

## Local Set-Up Instructions:

This repository contains the **Weedle Game**, a Pokémon-themed game built with a React frontend and a Go backend.

### Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (for the React frontend)  
  Install from [Node.js Official Website](https://nodejs.org/)

- **Go** (for the backend)  
  Install from [Go Official Website](https://go.dev/)

- **Git** (to clone this repository)  
  Install from [Git Official Website](https://git-scm.com/)

---


### 1. Clone the Repository

To set up the project locally, first clone this repository and navigate to the project directory:

```bash
git clone https://github.com/your-username/weedle-game.git

cd weedle-game
```

### 2. Set up the Frontend

1. Navigate to the `client` directory:

```bash
   cd client
   ```

2. Install the required dependencies:
 ```bash
   npm install
   ```
3. Start the React development server:
 ```bash
   npm start
   ```

The frontend should now be running at http://localhost:3000.

### 3. Set up the Backend

1. Navigate to the server directory (from /weedle-game):
```bash
   cd server
   ```
2. Start the Go server
```bash
   go run main.go
   ```
The backend should now be running at http://localhost:8080.

### 4. Access the Application

1. Open your browser and navigate to http://localhost:3000.

1. The React app will communicate with the Go backend via API calls.