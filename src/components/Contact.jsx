import SectionTitle from "./SectionTitle";
export default function Contact(){
  return (
    <section id="contact" className="py-5 reveal">
      <div className="container">
        <SectionTitle title="Contact" subtitle="Open to IT internships and cloud/data roles." />
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="p-4 border rounded-3">
              <p className="mb-4 text-muted">
                The fastest way to reach me is email. I’m happy to share code, discuss design choices, or swap fishing tips 🎣.
              </p>
              <div className="d-flex flex-wrap gap-2">
                <a className="btn btn-outline-secondary" href="mailto:jclond1@gmail.com">Email Me</a>
                <a className="btn btn-outline-secondary" href="https://www.linkedin.com/in/james-londrigan" target="_blank" rel="noreferrer">LinkedIn</a>
                <a className="btn btn-outline-secondary" href="/Resume_JamesLondrigan.pdf">Résumé PDF</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
