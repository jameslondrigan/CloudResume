// VisitorCount.jsx
import { useEffect, useState } from "react";

export default function VisitorCount({ pageId = "home" }) {
  const [count, setCount] = useState(null);

  useEffect(() => {
    const apiBase = "https://3yuk8wy3zf.execute-api.us-east-2.amazonaws.com/count?id=home";
    const todayKey = `countedToday:${new Date().toDateString()}:${pageId}`;
    const already = localStorage.getItem(todayKey) === "1";
    const url = `${apiBase}?${already ? "preview=1&" : ""}id=${encodeURIComponent(pageId)}`;

    fetch(url, { method: "GET", mode: "cors" })
      .then(r => r.json())
      .then(d => {
        if (typeof d.count === "number") setCount(d.count);
        if (!already) localStorage.setItem(todayKey, "1");
      })
      .catch(() => setCount(null));
  }, [pageId]);

  return (
    <p className="visits">
      <span>Visitors: </span>
      <strong aria-live="polite">{count ?? "—"}</strong>
    </p>
  );
}