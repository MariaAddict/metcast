import './Card.css';
import { CardItem } from '../../types';

interface CardProps {
    key: number,
    card: CardItem,
    forecast: string,
}

function Card(props: CardProps) {
    let temperatureCard: string;
    if (props.card.temperature > 0) {
        temperatureCard = "+" + props.card.temperature;
    } else  if (props.card.temperature < 0) {
        temperatureCard = "-" + props.card.temperature;
    } else {
        temperatureCard = String(props.card.temperature);
    }
    
    return (
        <li className="cards__item" style={ {backgroundImage: `url(${props.card.iconUrl})`, backgroundSize: props.forecast === '7days' ? '120px 120px' : '160px 160px'}}>
            <p className="cards__date">{props.card.date}</p>
            <p className="cards__temperature">{temperatureCard!}&deg;</p>
        </li>
    );
}

export default Card;