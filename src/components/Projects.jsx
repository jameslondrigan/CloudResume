// src/components/Projects.jsx
import React from "react";
import FeaturedProjects from "./FeaturedProjects";
import SectionTitle from "./SectionTitle";
import ProjectCarousel from "./ProjectCarousel";

const Projects = () => {
  return (
    <section id="projects" className="py-5">
      {/* One unified header for the whole section */}
      <div className="container mb-3">
        <SectionTitle
          title="Projects"
          subtitle="Featured case studies and additional selected work."
        />
      </div>

      {/* Featured case studies (AetherMart + Cloud Resume) */}
      <FeaturedProjects />

      {/* Divider + carousel label */}
      <div className="container mt-5">
        <hr className="mb-4" />
        <h3 className="h5 fw-semibold mb-1">More projects</h3>
        <p className="text-muted small mb-3">
          Swipe to browse additional projects I’ve worked on.
        </p>

        {/* Existing carousel */}
        <ProjectCarousel />
      </div>
    </section>
  );
};

export default Projects;
