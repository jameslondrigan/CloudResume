// src/components/ProjectCarousel.jsx
import { useState } from "react";
import useHorizontalWheel from "./useHorizontalWheel";
import ProjectModal from "./ProjectModal";
import { projects } from "./projectsData";

export default function ProjectCarousel() {
  const [active, setActive] = useState(null);
  const ref = useHorizontalWheel();

  const open = (p) => setActive(p);
  const close = () => setActive(null);

  const scrollByCards = (dir = 1) => {
    const el = ref.current;
    if (!el) return;
    const card = el.querySelector(".projects-card");
    const step = card ? card.getBoundingClientRect().width + 16 : 300;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section id="projects" className="py-5">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="m-0">Projects</h2>
          <div className="btn-group">
            <button className="btn btn-outline-secondary" onClick={() => scrollByCards(-1)} aria-label="Scroll left">‹</button>
            <button className="btn btn-outline-secondary" onClick={() => scrollByCards(1)} aria-label="Scroll right">›</button>
          </div>
        </div>

        <div className="projects-scroller" ref={ref}>
          {projects.map(p => (
            <article key={p.id} className="card projects-card border-0 shadow-sm">
              {p.img && <img src={p.img} alt="" className="card-img-top" style={{objectFit:"cover", maxHeight:220}} />}
              <div className="card-body">
                <h5 className="card-title">{p.title}</h5>
                <p className="card-text text-muted">{p.blurb}</p>
                <div className="d-flex gap-2">
                  <button className="btn btn-primary" onClick={() => open(p)}>View</button>
                  {p.links?.demo && <a className="btn btn-outline-secondary" href={p.links.demo} target="_blank" rel="noreferrer">Open</a>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <ProjectModal open={!!active} onClose={close} project={active} />
    </section>
  );
}
