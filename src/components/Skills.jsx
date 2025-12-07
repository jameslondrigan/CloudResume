import SectionTitle from "./SectionTitle";

export default function Skills() {
  return (
    <section id="skills" className="py-5 reveal">
      <div className="container">
        <SectionTitle
          title="Skills"
          subtitle="The tools and systems I lean on to ship real workflows."
        />
        <div className="row g-4">
          {/* Cloud & DevOps */}
          <div className="col-md-4">
            <div className="p-4 border rounded-3 h-100">
              <h6 className="fw-bold">Cloud & DevOps</h6>
              <ul className="text-muted m-0">
                <li>AWS: S3, CloudFront, Lambda, DynamoDB, IAM, Route 53</li>
                <li>GitHub Actions for CI/CD, basic IaC concepts</li>
                <li>Cost-aware, secure architectures with monitoring in mind</li>
              </ul>
            </div>
          </div>

          {/* Data & Knowledge Management */}
          <div className="col-md-4">
            <div className="p-4 border rounded-3 h-100">
              <h6 className="fw-bold">Data & Knowledge Management</h6>
              <ul className="text-muted m-0">
                <li>Relational data: MariaDB/SQL, schema design, triggers & stored procedures</li>
                <li>
                  NoSQL models: document, key-value, wide-column, and graph concepts for the right
                  workload.
                </li>
                <li>
                  RAG-style systems: vector embeddings, context stores, and retrieval pipelines to
                  ground LLMs in project data.
                </li>
              </ul>
            </div>
          </div>

          {/* Automation */}
          <div className="col-md-4">
            <div className="p-4 border rounded-3 h-100">
              <h6 className="fw-bold">Automation & Workflow Orchestration</h6>
              <ul className="text-muted m-0">
                <li>
                  Microsoft Power Automate for SharePoint, Outlook, Excel, and approval workflows.
                </li>
                <li>
                  n8n for API-driven automations, webhooks, and integrating third-party services.
                </li>
                <li>
                  Process mapping, error handling, and incremental improvements to remove manual,
                  repetitive work.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
