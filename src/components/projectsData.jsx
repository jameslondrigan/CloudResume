// src/components/projectsData.js

export const projects = [
  {
    id: "cloud-resume",
    title: "Cloud Resume (S3 + CloudFront)",
    blurb:
      "Static site on S3 fronted by CloudFront with Route 53. Lambda + DynamoDB powers a visitor counter API.",
    tech: ["AWS", "S3", "CloudFront", "Lambda", "DynamoDB"],
    links: {
      demo: "https://www.jameslondrigan.com",
      code: "#" // add repo when ready
    }
  },
  {
    id: "aethermart-etl",
    title: "AetherMart E-commerce (ETL + Replication)",
    blurb:
      "End-to-end ingestion & DB replication: staging tables, robust date parsing, deduplication, and asynchronous primary-secondary replication.",
    tech: ["Bash", "ETL", "Python", "SQL", "MariaDB", "Triggers", "Stored Procedures"],
    links: {
      demo: "#",
      code: "#"
    }
  },
  {
    id: "cloud-automation",
    title: "Cloud Automation Scripts",
    blurb:
      "Automated EC2 provisioning and S3 backup workflows using Bash with IAM-scoped roles; reduced manual work and standardized deployments.",
    tech: ["AWS", "EC2", "S3", "Bash", "Automation", "IaC"],
    links: {
      demo: "#",
      code: "#"
    }
  },
  {
    id: "jasper-green",
    title: "Jasper Green Lawn Care — Capstone Project",
    blurb:
      "ASP.NET MVC app for customer scheduling and payments. Migrated messy data to a normalized schema and implemented secure CRUD and reporting.",
    tech: ["ASP.NET MVC", "Entity Framework", "Data Migration", "Data Modeling", "Full-Stack"],
    links: {
      demo: "#",
      code: "#"
    }
  },
  {
    id: "dynamic-pricing-db",
    title: "Dynamic Pricing Database (Client Project)",
    blurb:
      "Designed a Microsoft Access solution with automated cost calculations and validation, cutting pricing errors ≈30% and improving turnaround.",
    tech: ["Microsoft Access", "VBA", "Database Design", "Automation", "Client Delivery"],
    links: {
      demo: "#",
      code: "#"
    }
  }
];
