# WEEDLE
Wordle but Pokemon, made with React/Redux (front-end) and Node/Express/MongoDb (back-end)


When completed, this game will be available at weedle-game.com, which I've already purchased.


The plan for this project is to make a publicly accessible SPA where a daily Pokemon is selected randomly, and the user has a given number of tries to determine which is the correct one. Think Wordle, although another lesser known offshoot called Weddle (NFL players), is a more apt comparison.


The game starts with the user selecting one of the 900+ available Pokemon. The game will then indicate whether the selcted Pokemon has any traits in common with the correct answer, and in some cases will hint at whether they are "hot or cold".


The traits that I'm planning to include:

- Name (correct or not)
- Type (a lot of pokemon have 2, not sure how I'll do this yet)
- Generation (1-9/10)
- Evo stage (1-3 (4 for mega, gmax))
- Pokedex number (higher or lower)


Other possibilities (probably need 2-4 more): egg group, abilities, stat total, smogon tiers, color, etc.


Stay tuned!

### WEEDLE-GAME.COM

Updates:
------------------------------------------------
May 19th, 2022: Created project, file directories, layout components, other components, imported libraries and frameworks

May 25th, 2022: Added favicons
Updated trait list, may not be in order:

- Name (no hint: the answer)
- Pokedex # (hint: higher or lower)
- Generation (hint: +/- 1) (may exclude if it makes things too easy)
- Primary Type (no hint)
- Secondary Type (hint: does it have one?)
- Evolutionary stage (no hint)
- Egg Group (hint: is it related (ex. Water 1/Water 2))

May 27-28th:
Redesigned interface, modeled after Weddle. Added drop down, api data retrieval, footer, fa icon buttons

[![Screen-Shot-2022-05-28-at-1-20-25-AM.png](https://i.postimg.cc/gJWsPStZ/Screen-Shot-2022-05-28-at-1-20-25-AM.png)](https://postimg.cc/06VDYfsk)