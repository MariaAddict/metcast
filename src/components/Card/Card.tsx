import {useMemo} from 'react';
import './Card.css';
import { CardItem } from '../../types';

interface CardProps {
    key: number,
    card: CardItem,
    forecast: string,
}

function Card(props: CardProps) {
    const temperatureCard: string = useMemo(() => {
        if (props.card.temperature > 0) {
            return "+" + props.card.temperature;
        } else  if (props.card.temperature < 0) {
            return "-" + props.card.temperature;
        } else {
            return String(props.card.temperature);
        }
    }, [props.card]);
    
    return (
        <li className="cards__item" style={ {backgroundImage: `url(${props.card.iconUrl})`, backgroundSize: props.forecast === '7days' ? '120px 120px' : '160px 160px'}}>
            <p className="cards__date">{props.card.date}</p>
            <p className="cards__temperature">{temperatureCard!}&deg;</p>
        </li>
    );
}

export default Card;