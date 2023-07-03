## About

WClasses Bot is a website that attempts to provide a simple UI for some functionalities that are currently not implemented in UW Flow:

- A method to view past course offerings (so offerings past the last year);
- A method to view the past courses a professor has taught;
- A method to view examination schedules for each course; and
- An easy way to view which faculty a professor is from.

The first bullet point has been implemented, whilst the rest will be implemented in a later iteration of the website.

This project combines two components:

Firstly, the schedule data was scraped from Waterloo's "archive" of previous class schedules using a Python script, which utilized Selenium and BeautifulSoup. The data was then loaded into a MongoDB database. I have used this script for other projects as well, such as the WatIAMLost project that I won the "Project Program" hackathon with.

Then, the main website was built using Next.js, React and TypeScript. It is quite "barebones" at the moment, but I plan to add to it in the future.
