import { useState } from "react";

export function LoadCard(props) {
  const [collapse, setCollapse] = useState(props.collapse);

  return (
    <div className="card">
      <div className="card-title" onClick={() => {setCollapse(!collapse); props.toggle()}}>
        <p>{props.title}</p><p>{collapse ? "-" : "+"}</p>
      </div>
      { collapse && <props.component />}
    </div>
  )
}