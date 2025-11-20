// src/components/FeaturedProjects.jsx
import React from "react";

const FeaturedProjects = () => {
  return (
    <div className="container mt-4">
      {/* AetherMart hero card */}
      <div className="card border-0 shadow-sm mb-4">
        <div className="card-body row g-4 align-items-center p-4 p-md-5">
          {/* Text side */}
          <div className="col-lg-7">
            <div className="d-flex flex-wrap align-items-center mb-2 gap-2">
              <span className="badge rounded-pill text-bg-light border">
                End-to-end cloud &amp; data
              </span>
              <span className="text-muted small">Primary hero project</span>
            </div>

            <h3 className="h3 fw-semibold mb-3">
              AetherMart E-Commerce Platform
            </h3>
            <p className="text-muted mb-3">
              Full e-commerce backend on MariaDB and MongoDB with ETL
              orchestration, high availability, and vector-search–ready product
              and review data.
            </p>

            <ul className="text-muted small mb-3 ps-3">
              <li>Multi-node replication with clear RPO/RTO tradeoffs.</li>
              <li>
                ETL flows from staging into clean schemas using CDC patterns.
              </li>
              <li>Triggers, stored procedures, and partitioning for scale.</li>
            </ul>

            <div className="mb-3">
              {[
                "MariaDB 11",
                "MongoDB",
                "ETL Pipelines",
                "Docker",
                "Ubuntu",
                "Python",
              ].map((tech) => (
                <span
                  key={tech}
                  className="badge rounded-pill text-bg-light border me-2 mb-2"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="d-flex flex-wrap gap-2">
              {/* TODO: update these hrefs */}
              <a
                href="Aethermart-case-study.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary btn-sm"
              >
                View full case study
              </a>
            </div>
          </div>

          {/* Image side */}
          <div className="col-lg-5">
            <div className="ratio ratio-4x3 rounded-4 overflow-hidden bg-light border">
              <img
                src="/images/aethermart-architecture.png"
                alt="AetherMart admin / architecture"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Cloud Resume + connection card */}
      <div className="row g-4">
        {/* Cloud Resume card */}
        <div className="col-lg-7">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body p-4">
              <div className="d-flex flex-wrap align-items-center mb-2 gap-2">
                <span className="badge rounded-pill text-bg-light border">
                  Cloud-native
                </span>
                <span className="text-muted small">
                  Supporting feature project
                </span>
              </div>

              <h3 className="h4 fw-semibold mb-3">Cloud Resume Website</h3>
              <p className="text-muted mb-3">
                A serverless personal site hosted on AWS with a Lambda–DynamoDB
                visitor counter and automated deployments.
              </p>

              <ul className="text-muted small mb-3 ps-3">
                <li>React/Bootstrap frontend hosted on S3 + CloudFront.</li>
                <li>Visitor analytics via API Gateway, Lambda, DynamoDB.</li>
                <li>CI/CD-driven updates through Git-based workflows.</li>
              </ul>

              <div className="mb-3">
                {[
                  "React",
                  "Bootstrap",
                  "AWS S3",
                  "CloudFront",
                  "Lambda",
                  "DynamoDB",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="badge rounded-pill text-bg-light border me-2 mb-2"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="d-flex flex-wrap gap-2">
                <a
                  href="https://www.jameslondrigan.com"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-secondary btn-sm"
                >
                  View live site
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Connection / narrative card */}
        <div className="col-lg-5">
          <div
            className="card border-0 h-100"
            style={{ backgroundColor: "#f9fafb" }}
          >
            <div className="card-body p-4 d-flex flex-column justify-content-between">
              <div>
                <p
                  className="text-uppercase text-muted small mb-2"
                  style={{ letterSpacing: "0.18em" }}
                >
                  How these projects connect
                </p>
                <p className="text-muted small mb-2">
                  Together, AetherMart and the Cloud Resume show the full arc of
                  what I have built: from low-level data architecture and ETL to
                  user-facing, cloud-native experiences.
                </p>
                <p className="text-muted small mb-0">
                  In both, the focus is on reliability, automation, and clear
                  service levels rather than throwing something together to work.
                </p>
              </div>
              <p className="text-muted small mt-3">
                These are the projects I reference most when talking about
                replication tradeoffs, ETL design, and serverless patterns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects;
