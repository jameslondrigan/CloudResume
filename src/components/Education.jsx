import SectionTitle from "./SectionTitle";
export default function Education(){
  return (
    <section id="education" className="py-5 bg-light reveal">
      <div className="container">
        <SectionTitle title="Education" subtitle="Texas A&M University" />
        <div className="row justify-content-center g-4">

          <div className="col-lg-8">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title mb-1">MS, Management Information Systems</h5>
                <div className="text-muted">Mays Business School • Aug 2025 – May 2027</div>
                <ul className="mt-3 text-muted">
                  <li>Coursework: Project Management, Advanced Database Management, Advanced Systems Design & Analysis</li>
                  <li>Projects: Cloud Resume, AetherMart E-commerce </li>
                  <li>Certifications in progress: AWS AI Practitioner, AWS Solutions Architect (planned)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title mb-1">BBA, Management Information Systems</h5>
                <div className="text-muted">Mays Business School • Aug 2022 – Aug 2025</div>
                <ul className="mt-3 text-muted">
                  <li>Coursework: Strategic Management, Responsible AI, Cloud Computing Intro</li>
                  <li>Focus: Cloud computing, advanced analytics, DevOps practices, Mobile Vet Access DB</li>
                  <li>Achievements: Case competition participation, Dean's Honor Roll Spring 2025</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
