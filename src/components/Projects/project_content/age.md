## About

Unlike previous offerings of the course, our final project in CS 246E was to design an ASCII-based game engine (ie AGE) using the `ncurses` C library, alongside 2-3 games to showcase our engine's functionality. For me, my first game was ARLG, a shooter-type game (and indeed the game shown in the thumbnail), my second game was Pong, and my last game was Flappy Bird.

At its highest level, the game engine employed the *Model-View-Controller* design pattern. It also makes heavy use of polymorphism, abstraction and template-metaprogramming in order to adhere to good OOP design principles, maximizing my engine's versatility and extendability. 

There were numerous design challenges that I faced, and I was able to overcome them by using techniques I learnt throughout the course. For example, I used the a combination of the *visitor pattern* and template meta-programming in collision handling, and employed the *command pattern* to reduce coupling throughout my engine's components.

Note that because this is a school project, I am forbidden (by Policy 71) to publicly release any of my code.
