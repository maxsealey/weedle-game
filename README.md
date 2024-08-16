# WEEDLE - Daily Pokemon Guessing Game



<div align="center">

<img src="https://i.postimg.cc/y6r3pjLd/weedle-thumbail.png" width="400px">

</div>

The plan for this project is to make a publicly accessible SPA where a daily Pokemon is selected randomly, and the user has a given number of tries to determine which is the correct one. Think Wordle, although another lesser known offshoot called Weddle (NFL players) is a more apt comparison.

The game starts with the user selecting one of the 1000+ available Pokemon. The game will then indicate whether the selcted Pokemon has any traits in common with the correct answer, and in some cases will hint at whether they are "hot or cold".


- Name (green when match is found)
- Pokedex # (green when solved, yellow when +/- 30, gray when not a match)
- Generation (green if match, yellow when +/- 1, gray when not a match)
- Type (green if exact match, yellow if they share one type)
- Height: +/- 1 ft (option for metric?)
- Weight: +/- 40 lbs

<br/>

----------

#### Instructions:

To run on your local machine (ignore quotation marks): 

    1. Clone to your local environment ("git clone <ssh or other preferred key...>")
    2. Open in your preferred IDE
    3. Navigate to the directory and run "npm install", which will install the required dependencies
    4. Run "npm start", and it should open up in the next available localhost (likely https://http://localhost:3000/)
