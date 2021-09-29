## About
Inspired by games like Keep Talking and Nobody Explodes that make you question if your friends have more than a single ounce of brain matter inside their skulls, BlowItUp is a cooperative platformer that allows you to experience the same self-doubt and frustration of restarting a Celeste C-side level for the 895th time - but with friends!

The goal of the game is simple - get to the star on every level by using the bombs and blocks you collect to blow up obstacles and construct paths along the way. There is a catch, however. The effects of your actions are reflected on the map of your partner, not yours! Every block placed and bomb detonated will cause blocks to be destroyed or created on your partner's map, helping (or mostly, inhibiting) them from reaching the coveted gold star.

Enjoy writhing in agony as your partner places a block 2 pixels too high, forcing you to start the level from scratch. Treasure the moment where your partner sets off the only bomb they had mid-air, destroying nothing but your will to continue playing this stupid game. BlowItUp features 15 exciting levels that challenge your problem-solving skills, spatial reasoning, and most importantly, patience to attempt the same level over and over again.

## How we built it
BlowItUp is made with Phaser, a HTML5 game framework with a simple in-built physics engine. Aside from the Phaser framework, the game was implemented with pure JavaScript, with the API queries to the backend handled by jQuery.

The backend involved a traditional PHP server with a MySQL database that stored information about each room and facilitated the transmission of game data, such as player movements and actions that had to be transmitted for the specific effect (creating or destroying blocks) to occur for the other player as intended. The use of a lightweight PHP script and optimized queries to a MySQL database allowed for improved performance, which was important as the players' positions had to be fetched frequently during the course of the game.

## Challenges we ran into
Drawing sprites was a first for us as none of us had any design experience (or much game development experience, for that matter). As such, we decided to go with pixel art as it was the easiest to draw without any talent whatsoever. It turned out surprisingly well in the end, and we learnt a lot about how sprite sheets work and how they are used to animate characters and objects in games!

On the technical side, performance and latency turned out to be a significant challenge - which was expected for a game meant to be played simultaneously by two players. This was resolved by using lightweight code and libraries as much as possible and by keeping performance in mind when structuring our database. For example, instead of repeatedly querying a large table for new information, we kept a separate table that recorded rooms with new updates and only queried the larger table in case there was an update to the game state of the specific room.

## Accomplishments that we're proud of
Actually completing level 14 and 15 of our game - we almost got a noise complaint cheering at 2am when that happened.

## What we gained from this experience
An ability to keep calm under pressure. (We learned this from playing the game, not from building it.)

## What's next for BlowItUp
- More frustrating levels!
- More game mechanics beyond bombs and placing blocks.
- Optimizing server throughput in order to support more rooms at once.
- Absolutely never playing this game again.

(Taken from [Devpost](https://devpost.com/software/blowitup))
