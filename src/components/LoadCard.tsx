import "../styles/loadCard.css";
import { svgArrowDown, svgArrowUp } from "./Svgs";
import { LoadCardProps } from "@Types/loadcard";
import useAppStore from "../store/useAppStore";

export function LoadCard(props: LoadCardProps) {
  const setExpandedCard = useAppStore((s) => s.setExpandedCard);
  const cardCollapse = useAppStore((s) => s.cardCollapse);

  const isCardExpanded = cardCollapse === props.title;
  const handleTitleClick = () => {
    setExpandedCard(props.title);
  };

  return (
    <div className="card">
      <div
        role="button"
        tabIndex={0}
        aria-expanded={isCardExpanded}
        aria-label={`Toggle ${props.title} card`}
        className="card-title"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleTitleClick();
          }
        }}
        onClick={() => {
          handleTitleClick();
        }}
      >
        <div className="card-svg">
          {props.svg}
          <p>{props.title}</p>
        </div>
        <p>{isCardExpanded ? svgArrowUp : svgArrowDown}</p>
      </div>

      {isCardExpanded && <>{<props.component />}</>}
    </div>
  );
}
