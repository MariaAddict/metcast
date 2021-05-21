import './CardList.css';
import Card from '../Card/Card';

interface CardListProps {
    cards: Array<{
        date: string,
        temperature: number,
        icon: any,
    }>,
    forecast: string,
}

function CardList(props: CardListProps) {
    return (
        <div className="card-list-block">
            {props.forecast === '7days' && (<button type="button" className="card-list-block__button card-list-block__button_direction_left"></button>)}
            <ul className="cards">
                {props.cards.map((card, i) => <Card key={i} card={card} forecast={props.forecast} />).slice(0, 3)}
            </ul>
            {props.forecast === '7days' && (<button type="button" className="card-list-block__button card-list-block__button_direction_right"></button>)}
        </div>
    );
}

export default CardList;