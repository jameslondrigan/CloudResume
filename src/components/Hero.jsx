import VisitorCount from "./VisitorCount";

export default function Hero(){
  return (
    <header id="top" className="py-5 hero-ready"
      style={{ 
        minHeight: '100svh', // mobile-safe viewport
        background:"linear-gradient(180deg, rgba(108,158,248,0.08) 0%, rgba(108,158,248,0) 100%)" }}>
      <div className="container">
        <div className="row align-items-center g-4">
          {/* Left column: intro */}
          <div className="col-12 col-lg-7">
            <span className="badge rounded-pill text-bg-light border">Cloud · Data · DevOps</span>
            <h1 className="display-5 fw-bold mt-3">Howdy, I’m James Londrigan!</h1>
            <p className="lead text-muted">
              I design and ship solutions across AWS (S3, CloudFront, Lambda, DynamoDB), modern web stacks,
              and SQL while balancing performance, security, and digital transformation.
            </p>
            <div className="d-flex gap-2 flex-wrap">
              <a href="#projects" className="btn btn-lg text-white" style={{ background:"#6c9ef8" }}>See Projects</a>
              <a href="#contact" className="btn btn-lg btn-outline-secondary">Get in Touch</a>
            </div>
            <div className="mt-4 small text-muted">Currently: probably doing homework.</div>
          </div>

          {/* Right column: headshot + at-a-glance */}
          <div className="col-12 col-lg-5">
            <div className="card border-0 shadow-sm">
              <div className="card-body text-center">
                <img
                  src="/Headshot.jpg"
                  alt="James Londrigan headshot"
                  className="rounded-circle img-fluid shadow-sm"
                  width="240" height="240"
                  style={{ objectFit: "cover", aspectRatio: "1 / 1" }}
                  loading="eager" fetchpriority="high" decoding="async"
                  sizes="(max-width: 576px) 40vw, 240px"
                />
                <h5 className="card-title mb-1 mt-3">James Londrigan</h5>
                <div className="text-muted small mb-3">Cloud · Data · DevOps</div>

                <ul className="list-unstyled m-0 text-start">
                  <li className="mb-2">✅ AWS SAA prep & hands-on labs</li>
                  <li className="mb-2">🛠️ ETL + SQL: MariaDB, triggers, SPs</li>
                  <li className="mb-2">🌐 S3 + CloudFront static hosting</li>
                  <li className="mb-2">🔐 Database security & access controls</li>
                  <li className="mb-0"><VisitorCount pageId="home" /></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
