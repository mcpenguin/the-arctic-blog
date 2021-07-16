## About

*Hypixel Skyblock Calculator* I made to help calculate an aspect of a game (Minecraft: Hypixel “Skyblock”) that I had gotten addicted to at the time. Simply put, one of the core elements of this game was “minions”, which produced resources for you over time. 

What prompted me to write this program, however, was that these minions still work even if you are off the game,  and so I got curious: is there a way I can model how much resources my minions will get after a certain amount of time? Is there a way I can calculate the maximum storage of each item that I have? Perhaps is there a way I can even take into account the p
erks each minion has that may speed up the rate of resource extraction?

The hardest step in my program was figuring out a way to calculate the amount of resources gathered as accurately as possible, but by doing as little “grunt” work as possible. This boils down to a simple fact: that the minions have a trait called their “level”, and this affects the rate at which they gather resources. However, I did not want to resort to entering every single data point for every single minion into my program, as it would have taken hours. Hence, I decided to model the trend using a mathematical formula.

By observation, I quickly noticed the trend looked a lot like an exponential curve, and so I decided to use a combination of my scientific calculator and a [spreadsheet](https://docs.google.com/spreadsheets/d/10YUtkzptNMXSjqvwNkKL1JlVD5oYp4jFD7YHXvj7e7o/edit?usp=sharing) to figure out a general formula (in the form T=ab^L) for all of the minions. In hindsight, there are definitely more efficient and easier ways to calculate this, but my statistics skills were not as good back then.

Implementing this formula into my program, I was able to quickly find out a rough estimate of the time it would take for one unit of resource to be produced (and hence could calculate the rate).

I lost interest in the game before I could fully complete the last question, or beautify my program, but it was a really fun project to work on nevertheless.