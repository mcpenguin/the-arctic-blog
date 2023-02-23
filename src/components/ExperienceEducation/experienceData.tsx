/* eslint-disable react/no-unescaped-entities */
// module containing experience data
const data = [
  {
    title: "Student Representive",
    subtitle: "Statistics and Actuarial Science Committee",
    date: "Jan 2023 - Present",
    content: null,
    tags: ["ec"],
  },
  {
    title: "R&D Engineer",
    subtitle: "Ansys",
    date: "Jan 2023 - Present",
    content: null,
    tags: ["coop", "tech"],
  },
  {
    title: "Computer Science Representative",
    subtitle: "MathSoc Council",
    date: "Jan 2023 - Present",
    content: null,
    tags: ["ec"],
  },
  {
    title: "MATH 137/138 Tutor",
    subtitle: "UW Tutorial Centre",
    date: "Sep 2022 - Dec 2022",
    content: null,
    tags: ["ec"],
  },
  {
    title: "CodeyBot Developer Lead",
    subtitle: "Computer Science Club (CSC)",
    date: "Aug 2022 - Present",
    content: (
      <ul>
        <li>
          Led a team of <b>6 developers</b> to build the server's Discord
          bot, CodeyBot, built on{" "}
          <b>TypeScript, Node.js, Sapphire, Docker and SQLite</b> and deployed
          on <b>Google Cloud Platform</b>
        </li>
        <li>
          Moderated and added features to the Computer Science Club's Discord
          server with <b>3,000+ members</b>
        </li>
        <li>
          Built a framework from Sapphire using object-oriented programming to
          allow Codey to have both regular and slash commands
        </li>
        <li>
          Held weekly scrum meetings and managed the team's workload using a kanban board
          on GitHub Projects
        </li>
      </ul>
    ),
    tags: ["ec", "tech"],
  },
  {
    title: "Discord Moderator",
    subtitle: "UW Visual Arts Club",
    date: "June 2022 - Sep 2022",
    content: null,
    tags: ["ec"],
  },
  {
    title: "Software Developer",
    subtitle: "Geotab",
    date: "May 2022 - Aug 2022",
    content: (
      <ul>
        <li>
          Developed a new API endpoint using <b>C#</b> and <b>PostgreSQL</b>{" "}
          from the controller layer to the repository layer to evaluate the
          electrical efficiency of vehicles
        </li>
        <li>
          Employed <b>test driven development</b> principles to implement the
          logic for calculating the efficiency over multiple sub-periods and to
          handle time zones
        </li>
        <li>
          Participated in numerous architecture and design discussions with
          product and sales to investigate how to mitigate the algorithm’s
          memory usage and optimize its performance
        </li>
        <li>
          Implemented a custom script using <b>Pandas</b> to investigate vehicle
          anomalies for <b>3,000,000+ trips</b>, sharing the findings with other
          non-technical teams
        </li>
      </ul>
    ),
    tags: ["coop", "tech"],
  },
  {
    title: "CodeyBot Developer",
    subtitle: "Computer Science Club (CSC)",
    date: "Jan 2022 - Aug 2022",
    content: (
      <ul>
        <li>
          Responsibilities are similar to those done as a lead - see above
        </li>
      </ul>
    ),
    tags: ["ec", "tech"],
  },
  {
    title: "Director",
    subtitle: "MathSoc Cartoons",
    date: "Jan 2022 - Present",
    content: (
      <ul>
        <li>
          Oversaw the development of 12 Math and CS educational cartoons that
          help undergraduate students understand difficult course concepts
        </li>
        <li>
          Managed a team of several writers and artists, providing feedback on
          their sketches and artwork
        </li>
        <li>
          Engaged in constant communication with 70+ student and faculty
          reviewers to ensure quality assurance of comics
        </li>
        <li>
          Wrote a Python script to auto-generate reminders for each comic on
          Google Calendar, eliminating hours of manual labor
        </li>
        <li>
          Launched numerous marketing initiatives, including a Discord
          advertising campaign, increasing the number of followers on the
          Instagram by 30%
        </li>
        <li>
          Coordinated with MathSoc executives and reviewers to jump-start the
          creation of merchandise
        </li>
        <li>
          Published our comics on MathNEWS, the LEARN/Piazza forums of 10+
          Waterloo classes, MathSoc's social media accounts and in the FYMSiC
          newsletter, reaching 1000+ people and garnering 50+ likes per post
        </li>
        <li>
          Prepared and delivered presentations to MathSoc and MEF to secure
          funding for the initiative
        </li>
        <li>
          Introduced MathSoc Cartoons to a panel of 30+ first-year undergraduate
          Math & CS professors from various Canadian universities, helping to
          increase outreach of our comics beyond Waterloo
        </li>
      </ul>
    ),
    tags: ["ec"],
  },
  {
    title: "MATH 135 Marker",
    subtitle: "University of Waterloo",
    date: "Sep 2021 - Dec 2021",
    content: (
      <ul>
        <li>Reviewed and marked 100+ assignments each week</li>
      </ul>
    ),
    tags: ["ec"],
  },
  {
    title: "Comic Writer",
    subtitle: "MathSoc Cartoons",
    date: "May 2021 - Dec 2022",
    content: (
      <ul>
        <li>
          Created storyboards for original mathematics and computer science
          cartoons
        </li>
        <li>
          Liaised with team to review each other's work and provide feedback
        </li>
        <li>
          Comics drawn:
          <ul>
            <li>
              <a href="https://www.instagram.com/p/CQV6L71tLQZ/">
                Comic 21 - The Riemann Integral (MATH 138)
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/p/CWjTHCfFHnB/">
                Comic 29 - Pascal's Triangle (MATH 239)
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/p/CZkr0mgvt4d/">
                Comic 32 - Sorting Algorithms and Big-O Notation (CS 136)
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/p/Cj_WJ23O781/?hl=en">
                Comic 45 - Limits and Convergence (MATH 137)
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/p/ClHg3EKOsl0/?hl=en">
                Comic 47 - The Epsilon-Delta Definition of a Limit (MATH 137)
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/p/Cof4dlxuIth/?hl=en">
                Comic 49 - Dijkstra's Algorithm (CS 341)
              </a>
            </li>
          </ul>
        </li>
      </ul>
    ),
    tags: ["ec"],
  },
  {
    title: "Web Developer",
    subtitle: "Pure Math Club (PMC)",
    date: "May 2021 - Dec 2021",
    content: (
      <ul>
        <li>
          Redesigned the University of Waterloo’s Pure Math Club website using{" "}
          <b>React, Sass and Node</b>
        </li>
        <li>
          Built various helper scripts to allow executives to easily add/edit
          website content
        </li>
      </ul>
    ),
    tags: ["ec", "tech"],
  },
  {
    title: "Data Analyst",
    subtitle: "eMedAsia",
    date: "May 2021 - Aug 2021",
    content: (
      <ul>
        <li>
          Utilized <b>Metabase</b> to analyze 50+ MB of transaction records from{" "}
          <b>41,000+</b> clinics in Malaysia
        </li>
        <li>
          Independently built and implemented a Joget website that allows
          vendors to sell products through Facebook Live
        </li>
        <li>
          Contributed to developing and maintaining a Joget website to manage
          medical subscriptions for doctors and patients
        </li>
      </ul>
    ),
    tags: ["coop", "tech"],
  },
  {
    title: "Mathematics Tutor",
    subtitle: "Dignity for Children Foundation",
    date: "June 2019 - Dec 2019",
    content: (
      <ul>
        <li>
          Taught mathematics and provided 1-1 guidance and tutoring to a class
          of Grade 5 students
        </li>
        <li>
          Optimised course materials and assignments to maximise class
          engagement and effectiveness
        </li>
        <li>
          Personalised help with each student to ensure they had mastery over
          the material
        </li>
      </ul>
    ),
    tags: ["ec", "hs"],
  },
  {
    title: "Piano Tutor",
    subtitle: "Shelter Home for Children",
    date: "Apr 2019 - Jan 2020",
    content: (
      <ul>
        <li>
          Provided private lessons to residents of the home of various ages
        </li>
        <li>
          Catered learning style and music scores to each student to maximize
          their engagement and learning efficacy
        </li>
      </ul>
    ),
    tags: ["ec", "hs"],
  },
  {
    title: "Curator",
    subtitle: "TEDxSunwayUniversity",
    date: "Jan 2019 - Jan 2020",
    content: (
      <ul>
        <li>Recruited and worked with speakers to prepare their speeches</li>
        <li>Created the themes for the club's various events</li>
      </ul>
    ),
    tags: ["ec", "hs"],
  },
  {
    title: "Trombonist",
    subtitle: "Sunway University Ensemble (SUE)",
    date: "Sep 2018 - June 2020",
    content: null,
    tags: ["ec", "hs"],
  },
  {
    title: "Software Engineer",
    subtitle: "TMS Software Sdn Bhd",
    date: "May 2018 - July 2018",
    content: (
      <ul>
        <li>
          Implemented the framework for a Joget project managing a country-wide
          database of over 41,000 clinics
        </li>
        <li>
          Used the Google Maps API to display locations of clinics in a visually
          appealing interface
        </li>
        <li>
          Created a comprehensive user guide for a truck delivery application,
          currently used by over 100,000 users
        </li>
      </ul>
    ),
    tags: ["coop", "tech", "hs"],
  },
];

export default data;
