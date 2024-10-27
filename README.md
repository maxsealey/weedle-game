<div align="center">

# WEEDLE: Daily Pokemon Guessing Game

</div>



<h4>User Interface as of October 2024:</h4>

<div align="center">

<img src="https://i.postimg.cc/GhFfywWN/Screenshot-2024-10-26-at-4-58-03-PM.png" width="500px">

</div>

<br/>

## Overview

The plan for this project is to make a publicly accessible SPA where a daily Pokemon is selected randomly, and the user has a given number of tries to determine which is the correct one. Think Wordle, although another lesser known offshoot called Weddle (NFL players) is a more apt comparison.

The game starts with the user selecting one of the 1000+ available Pokemon. The game will then indicate whether the selcted Pokemon has any traits in common with the correct answer, and in some cases will hint at whether they are "hot or cold".

#### Categories:

- Name (green when match is found)
- Pokedex # (green when +/- 3, yellow when +/- 30)
- Generation (green if match, yellow when +/- 1)
- Types (green if they share both types (including "none" as a second egg group), yellow if they share one)
- Egg Groups (green if they share both egg groups (including "none" as a second egg group), yellow if they share one)
- Color (green if they are the same color)


<br/>

## Local Set-Up Instructions:

To run on your local machine (ignore quotation marks): 

    1. Clone to your local environment ("git clone <ssh or other preferred key...>")
    2. Open in your preferred IDE
    3. Navigate to the 'client' directory and run "npm install", which will install the required dependencies
    4. Run "npm start", and it should open up in the next available localhost
