// React components for pages
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import components
import Header from "./components/Header/Header";
import Welcome from "./components/Welcome/Welcome";
import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./components/Projects/Projects";
import ExperienceEducation from "./components/ExperienceEducation/ExperienceEducation";
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

const NotesPage = () => (
  <>
    <Header />
    <Notes />
    <ContactMe />
  </>
);

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
      <Route exact path="/notes" component={NotesPage} />
      <Route
        exact
        path="/projects/:projectId"
        component={IndividualProjectPage}
      />
      <Route component={NotFoundSection} />
    </Switch>
  </Router>
);

export default App;
