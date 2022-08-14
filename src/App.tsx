// React components for pages
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import components
import Header from "./components/Header/Header";
import Welcome from "./components/Welcome/Welcome";
import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./components/Projects/Projects";
import ExperienceEducation from "./components/ExperienceEducation/ExperienceEducation";
import Extracurriculars from "./components/Extracurriculars/Extracurriculars";
// import Piano from "./components/Piano/Piano";
import Achievements from "./components/Achievements/Achievements";
import Notes from "./components/Notes/Notes";
import ContactMe from "./components/ContactMe/ContactMe";

import ProjectContent from "./components/Projects/ProjectContent";
import NotFound from "./components/404NotFound/404NotFound";

// home page
const HomePage = () => (
  <>
    <Header />
    <Welcome />
    <AboutMe />
    <Projects />
    <ExperienceEducation />
    <Extracurriculars />
    {/* <Piano /> */}
    <Achievements />
    <Notes />
    <ContactMe />
  </>
);

const IndividualProjectPage = (props: any) => {
  React.useEffect(() => window.scrollTo(0, 0));
  const { match } = props;
  return (
    <>
      <Header />
      <ProjectContent projectId={match.params.projectId} />
      <ContactMe />
    </>
  );
};

const NotFoundSection = () => (
  <>
    <Header />
    <NotFound />
    <ContactMe />
  </>
);

const App = () => (
  <Router forceRefresh basename={`${process.env.PUBLIC_URL}`}>
    <Switch>
      <Route exact path="/" component={HomePage} />
      {/* <Route exact path="/projects" component={ProjectsPage} /> */}
      <Route
        exact
        path="/projects/:projectId"
        component={IndividualProjectPage}
      />
      {/* <Route exact path="/experience" component={ExperiencePage} /> */}
      {/* <Route exact path="/education" component={EducationPage} /> */}
      {/* <Route exact path="/extracurriculars" component={ExtracurricularsPage} /> */}
      {/* <Route exact path="/achievements" component={AchievementsPage} /> */}
      {/* <Route exact path="/notes" component={NotesPage} /> */}
      {/* <Route exact path="/credits" component={CreditsPage} /> */}
      <Route component={NotFoundSection} />
    </Switch>
  </Router>
);

export default App;
