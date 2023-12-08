export function LoadCard(props) {

  return (
    <div className="card">
      <div className="card-title" onClick={() => {props.toggle(props.title)}}>
        <div className="card-svg">
          {props.svg}<p>{props.title}</p>
        </div>
        <p>{props.collapse == props.title ? "-" : "+"}</p>
      </div>
      { props.collapse == props.title && 
      <props.component inputChange={props.inputChange} update={props.update} />}
    </div>
  )
}