import { useState } from "react";

export function LoadCard(props) {
  const [collapse, setCollapse] = useState(false);

  return (
    <div className="card">
      <div className="card-title" onClick={() => setCollapse(!collapse)}>
        <p>{props.title}</p><p>{collapse ? "-" : "+"}</p>
      </div>
      { collapse && <props.component />}
    </div>
  )
}