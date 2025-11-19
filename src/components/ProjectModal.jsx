// src/components/ProjectModal.jsx
export default function ProjectModal({ open, onClose, project }) {
  if (!open || !project) return null;
  return (
    <div className="modal fade show" style={{display:"block", background:"rgba(0,0,0,.5)"}} role="dialog" aria-modal="true">
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content border-0 shadow">
          <div className="modal-header">
            <h5 className="modal-title">{project.title}</h5>
            <button className="btn-close" aria-label="Close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            {project.img && (
              <img src={project.img} alt="" className="img-fluid rounded mb-3" />
            )}
            <p className="text-muted mb-3">{project.blurb}</p>
            {project.tech?.length > 0 && (
              <div className="d-flex flex-wrap gap-2 mb-2">
                {project.tech.map(t => (
                  <span key={t} className="badge text-bg-light border">{t}</span>
                ))}
              </div>
            )}
          </div>
          <div className="modal-footer">
            {project.links?.demo && (
              <a className="btn btn-primary" href={project.links.demo} target="_blank" rel="noreferrer">Open Demo</a>
            )}
            {project.links?.code && (
              <a className="btn btn-outline-secondary" href={project.links.code} target="_blank" rel="noreferrer">Source</a>
            )}
            <button className="btn btn-light" onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}
