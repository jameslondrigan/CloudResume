// Navbar.jsx
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-sm">
  <div className="container">
    <a className="navbar-brand fw-semibold" href="#top">James Londrigan</a>

    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#mainNav"
      aria-controls="mainNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="mainNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
        <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
        <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
        <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
      </ul>
    </div>
  </div>
</nav>
  );
}
