// React components for pages
import React from "react";

// import components
import Header from "../components/Header/Header";
import Welcome from "../components/Welcome/Welcome";
import AboutMe from "../components/AboutMe/AboutMe";
import Projects from "../components/Projects/Projects";
import ExperienceEducation from "../components/ExperienceEducation/ExperienceEducation";
import Extracurriculars from "../components/Extracurriculars/Extracurriculars";
import Piano from "../components/Piano/Piano";
import Achievements from "../components/Achievements/Achievements";
import Notes from "../components/Notes/Notes";
import ContactMe from "../components/ContactMe/ContactMe";

import ProjectContent from "../components/Projects/ProjectContent";
import NotFound from "../components/404NotFound/404NotFound";

import './index.module.scss';

// home page
const HomePage = () => (
  <>
    <Header />
    <Welcome />
    <AboutMe />
    <Projects />
    <ExperienceEducation />
    <Extracurriculars />
    <Piano />
    <Achievements />
    <Notes />
    <ContactMe />
  </>
);

// eslint-disable-next-line no-unused-vars
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

// eslint-disable-next-line no-unused-vars
const NotFoundSection = () => (
  <>
    <Header />
    <NotFound />
    <ContactMe />
  </>
);

export default HomePage;
