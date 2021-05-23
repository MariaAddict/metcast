import React, { useState } from "react";
import "./CardList.css";
import Card from "../Card/Card";
import { Cards } from "../../types";

interface CardListProps {
  cards: Cards;
  forecast: string;
  handleButtonRight?(): void;
  handleButtonLeft?(): void;
  numberOfInitalCard?: number;
  isLeftButtonEnabled?: boolean;
  isRightButtonEnabled?: boolean;
}

function CardList(props: CardListProps) {
  return (
    <div className="card-list-block">
      {props.forecast === "7days" && (
        <button
          type="button"
          className={`card-list-block__button ${
            props.isLeftButtonEnabled ? "" : "card-list-block__button_disabled"
          } card-list-block__button_direction_left`}
          onClick={props.handleButtonLeft}
          disabled={!props.isLeftButtonEnabled}
        ></button>
      )}
      <ul className="cards">
        {props.cards
          .map((card, i) => (
            <Card key={i} card={card} forecast={props.forecast} />
          ))
          .slice(props.numberOfInitalCard, props.numberOfInitalCard! + 3)}
      </ul>
      {props.forecast === "7days" && (
        <button
          type="button"
          className={`card-list-block__button ${
            props.isRightButtonEnabled ? "" : "card-list-block__button_disabled"
          } card-list-block__button_direction_right`}
          onClick={props.handleButtonRight}
          disabled={!props.isRightButtonEnabled}
        ></button>
      )}
    </div>
  );
}

export default CardList;
