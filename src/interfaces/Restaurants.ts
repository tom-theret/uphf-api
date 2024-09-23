export interface RestaurantsResponse {
    [restaurant: number]: {
        id: number;
        title: string;
        opening: Opening;
        contact: string;
        infos: string;
        zone: string;
        latitude: number;
        longitude: number;
        thumbnailUrl: string;
        shortDesc: string;
    }
}

interface Opening {
    [day: number]: {
        label: string;
        isOpen: boolean;
    }
}

export interface RestaurantMenuResponse {
    [menu: number]: {
        id: number;
        date: string;
        meal: Meal[];
    }
}

interface Meal {
    name: string;
    foodcategory: Foodcategory[];
}

interface Foodcategory {
    name: string;
    dishes: string[];
}