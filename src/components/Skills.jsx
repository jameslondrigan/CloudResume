import SectionTitle from "./SectionTitle";
export default function Skills(){
  return (
    <section id="skills" className="py-5 reveal">
      <div className="container">
        <SectionTitle title="Skills" subtitle="The tools I reach for most often." />
        <div className="row g-4">
          <div className="col-md-4">
            <div className="p-4 border rounded-3 h-100">
              <h6 className="fw-bold">Cloud & DevOps</h6>
              <ul className="text-muted m-0">
                <li>AWS: S3, CloudFront, Lambda, DynamoDB, IAM</li>
                <li>GitHub Actions (CI/CD), IaC basics</li>
                <li>Monitoring & cost-aware design</li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 border rounded-3 h-100">
              <h6 className="fw-bold">Data & Backend</h6>
              <ul className="text-muted m-0">
                <li>MariaDB/SQL, triggers & stored procedures</li>
                <li>ETL pipelines, data quality checks</li>
                <li>APIs (serverless + REST)</li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 border rounded-3 h-100">
              <h6 className="fw-bold">Frontend</h6>
              <ul className="text-muted m-0">
                <li>React, Bootstrap, accessible UI</li>
                <li>Responsive layouts, perf hygiene</li>
                <li>Docs and demos that ship</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
