const ACCENT = "#6c9ef8";
export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="text-center mb-5">
      <h2 className="fw-bold">{title}</h2>
      {subtitle && <p className="text-muted m-0">{subtitle}</p>}
      <div className="accent-bar" style={{ background: ACCENT }} />
    </div>
  );
}
