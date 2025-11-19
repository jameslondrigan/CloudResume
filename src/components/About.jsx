import SectionTitle from "./SectionTitle";
export default function About(){
  return (
    <section id="about" className="py-5 reveal">
      <div className="container">
        <SectionTitle title="About" subtitle="Cloud enthusiast and data strategist." />
        <div className="row g-4">
          <div className="col-lg-7">
            <p className="fs-5">
              I am a TAMU MIS grad leaning into cloud architecture and data systems. I decided to pursue my Masters
              in MIS as well to increase my knowledge and understanding of cloud resources, particularly AWS.
              I enjoy creating basic projects and turning them into elegant, observable products that have a true impact.
            </p>
            <p className="text-muted">
              Personally, I love to workout, hike, listen to music, kayak, fish, and hunt. So when I'm not learning
              about leveraging technology, you’ll find me outside exploring nature, refining my home workspace aesthetic,
              and experimenting with lightweight design systems for personal projects.
            </p>
          </div>
          <div className="col-lg-5">
            <div className="p-4 rounded-3 border">
                <div className="d-flex justify-content-between mt-3">
                <span className="fw-semibold">SQL</span><span>Advanced</span>
              </div>
              <div className="progress my-2" style={{ height:10 }}>
                <div className="progress-bar bg-success" role="progressbar" style={{ width:"85%" }} />
              </div>
              <div className="d-flex justify-content-between">
                <span className="fw-semibold">AWS</span><span>Intermediate</span>
              </div>
              <div className="progress my-2" style={{ height:10 }}>
                <div className="progress-bar" role="progressbar" style={{ width:"75%", background:"#6c9ef8" }} />
              </div>
              <div className="d-flex justify-content-between mt-3">
                <span className="fw-semibold">Bash Scripting</span><span>Growing</span>
              </div>
              <div className="progress my-2" style={{ height:10 }}>
                <div className="progress-bar bg-info" role="progressbar" style={{ width:"60%" }} />
              </div>
                            <div className="d-flex justify-content-between mt-3">
                <span className="fw-semibold">Python</span><span>Growing</span>
              </div>
              <div className="progress my-2" style={{ height:10 }}>
                <div className="progress-bar bg-info" role="progressbar" style={{ width:"50%" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
