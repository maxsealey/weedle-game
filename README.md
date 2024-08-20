<div align="center">

# WEEDLE: Daily Pokemon Guessing Game

</div>



<h4>User Interface as of August 2024:</h4>

<div align="center">

<img src="https://i.postimg.cc/y6r3pjLd/weedle-thumbail.png" width="500px">

</div>

<br/>

## Overview

The plan for this project is to make a publicly accessible SPA where a daily Pokemon is selected randomly, and the user has a given number of tries to determine which is the correct one. Think Wordle, although another lesser known offshoot called Weddle (NFL players) is a more apt comparison.

The game starts with the user selecting one of the 1000+ available Pokemon. The game will then indicate whether the selcted Pokemon has any traits in common with the correct answer, and in some cases will hint at whether they are "hot or cold".

#### Categories (need to update UI):

- Name (green when match is found)
- Pokedex # (green when +/- 3, yellow when +/- 30, gray when not a match)
- Generation (green if match, yellow when +/- 1, gray when not a match)
- Primary Type (green if it's the target Pokemon's primary type too, yellow if it's the target's secondary type, gray if neither)
- Secondary Type (green if it's the secondary type of each, yellow if it's the target's primary type, gray if neither)
- Height (green if within 2" or 5cm, yellow if +/- 1' or 0.3m)

<br/>

## Technical Components

Currently using React for the front end, playing around with a Next.js and Typescript version. Stay tuned for more details

<br/>

## Local Set-Up Instructions:

To run on your local machine (ignore quotation marks): 

    1. Clone to your local environment ("git clone <ssh or other preferred key...>")
    2. Open in your preferred IDE
    3. Navigate to the directory and run "npm install", which will install the required dependencies
    4. Run "npm start", and it should open up in the next available localhost
