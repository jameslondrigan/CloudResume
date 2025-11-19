export default function Footer(){
  return (
    <footer className="py-4 border-top">
      <div className="container d-flex flex-wrap justify-content-between align-items-center">
        <span className="text-muted">© {new Date().getFullYear()} James Londrigan</span>
        <span className="text-muted">Built with React + Bootstrap · Deployed on S3 + CloudFront</span>
      </div>
    </footer>
  );
}
