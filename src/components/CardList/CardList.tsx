import "./CardList.css";
import Card from "../Card/Card";
import { Cards } from "../../types";

interface CardListProps {
  cards: Cards;
  forecast: string;
  showNextCard?(): void;
  showPreviousCard?(): void;
  numberOfInitalCard?: number;
  isLeftButtonEnabled?: boolean;
  isRightButtonEnabled?: boolean;
}

function CardList(props: CardListProps) {

  let currentWidth: any = window.innerWidth;

  return (
    <div className="card-list-block">
      {props.forecast === "7days" && (
        <button
          type="button"
          className={`card-list-block__button ${
            props.isLeftButtonEnabled ? "" : "card-list-block__button_disabled"
          } card-list-block__button_direction_left`}
          onClick={props.showPreviousCard}
          disabled={!props.isLeftButtonEnabled}
        ></button>
      )}
      <ul className="cards">
        {props.cards
          .map((card, i) => (
            <Card key={i} card={card} forecast={props.forecast} />
          ))
          .slice(props.numberOfInitalCard, props.forecast==='day' ? 1 : currentWidth <= 540 ? props.cards.length : props.numberOfInitalCard! + 3)}
      </ul>
      {props.forecast === "7days" && (
        <button
          type="button"
          className={`card-list-block__button ${
            props.isRightButtonEnabled ? "" : "card-list-block__button_disabled"
          } card-list-block__button_direction_right`}
          onClick={props.showNextCard}
          disabled={!props.isRightButtonEnabled}
        ></button>
      )}
    </div>
  );
}

export default CardList;
