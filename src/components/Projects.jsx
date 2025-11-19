// Projects.jsx
import SectionTitle from "./SectionTitle";
import ProjectCarousel from "./ProjectCarousel";
import { projects } from "./projectsData";

export default function Projects() {
  return (
    <section id="projects" className="py-5 bg-light reveal">
      <div className="container">
        <SectionTitle title="Projects" subtitle="Swipe to browse." />
        <ProjectCarousel items={projects} />
      </div>
    </section>
  );
}