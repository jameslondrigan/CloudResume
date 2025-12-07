export default function Experience() {
  return (
    <section id="experience" className="py-5 bg-light">
      <div className="container">
        <div className="row mb-4">
          <div className="col">
            <h2 className="text-center mb-3">Work Experience</h2>
            <p className="text-center text-muted mb-0">
              Business development and process automation work focused on website accessibility,
              MOUs, and SharePoint workflows.
            </p>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="card shadow-sm border-0">
              <div className="card-body">
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-2 gap-2">
                  <div>
                    <h3 className="h5 mb-1">Business Development Program Aide</h3>
                    <p className="mb-1 fw-semibold">
                      Texas A&amp;M AgriLife Center for Managed Technology Services
                    </p>
                    <p className="text-muted mb-0">
                      College Station, Texas · Remote · Oct 2025 – Present
                    </p>
                  </div>
                  <span className="badge bg-primary">
                    Power Automate &amp; Process Automation
                  </span>
                </div>

                <hr />

                <ul className="mb-0">
                  <li>
                    Coordinate website accessibility outreach by sending targeted communications,
                    scheduling consultations, and following up with site owners to move projects
                    toward signed MOUs.
                  </li>
                  <li>
                    Draft, track, and refine MOU templates and documentation to standardize one-off
                    projects while maintaining SharePoint and Excel trackers for WPE status, MOU
                    pipelines, and team workload.
                  </li>
                  <li>
                    Design and maintain <strong>Microsoft Power Automate</strong> flows that update
                    SharePoint lists, set remediation indicators, and send email notifications,
                    removing manual copy-paste work and{' '}
                    <strong>significantly increasing outreach efficiency</strong>.
                  </li>
                  <li>
                    Collaborate with internal stakeholders to align timelines and requirements and
                    leverage automation and AI tools to streamline repetitive tasks and keep
                    projects moving toward production.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
