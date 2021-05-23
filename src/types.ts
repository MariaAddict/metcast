type CardItem = {
    date: string,
    temperature: number,
    iconUrl: string,
}

type Cards = Array<CardItem>

type Coordinates = {
    lat: number,
    lon: number,
}

export type { CardItem, Cards, Coordinates};