## About

*My Course Graph* is an interactive React application that displays a graph (ie a network)
of courses from the University of Waterloo, helping students visualize which courses lead to others and
hence helps them plan their course schedules better. Each node represents a course, and an edge
represents a prerequisite (e.g. MATH 145 leads to MATH 146, so an edge is drawn from the former to the
latter.)

The website utilizes the **University of Waterloo Open Data API** to fetch course data. However, since 
the prerequisites for Waterloo courses are not in an easily parsible format, the user still has to input
the prerequisites manually (in the future, it might be able to solve this using a NLP algorithm or equivalent). To display the graph,
I used the `react-graph-vis` library, and used `react-bootstrap` for the overall layout of the front-end.
The backend uses Node.js and Express.js

In the future, I plan to store the course data in a MongoDB database, as calling the API to fetch course data
is slow and inefficient. I also plan to add some additional functionality to the website,
most notably an interface to help users plan which courses they want to take in each term.