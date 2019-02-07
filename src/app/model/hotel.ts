export interface Location {
    lat: number;
    lng: number;
    address: string;
}

export interface Room {
    label: string;
    price: number;
}

export interface Hotel {
    id: number;
    city: string;
    name: string;
    services: string[];
    location: Location;
    rate: number;
    stars: number;
    images: string[];
    email: string;
    rooms: Room[];
}

