import './Card.css';

interface CardProps {
    key: number,
    card: {
        date: string,
        temperature: number,
        icon: any,
    },
    forecast: string,
}

function Card(props: CardProps) {
    return (
        <li className="cards__item" style={ {backgroundImage: `url(${props.card.icon})`, backgroundSize: props.forecast === '7days' ? '120px 120px' : '160px 160px'}}>
            <p className="cards__date">{props.card.date}</p>
            <p className="cards__temperature">{props.card.temperature}</p>
        </li>
    );
}

export default Card;