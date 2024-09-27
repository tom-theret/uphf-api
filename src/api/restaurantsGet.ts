import { Restaurant, RestaurantMenu } from "../class/Restaurant";
import { RestaurantMenuResponse, RestaurantsResponse } from "../interfaces/Restaurants";
import { RESTAURANT_MENU, RESTAURANTS } from "../utils/endpoints";
import { UPHFFetcher } from "../utils/fetcher";

export const RestaurantsGet = async (): Promise<Restaurant[]> => {
    const response = await UPHFFetcher(RESTAURANTS(), {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });

    const raw = (await response.json()) as RestaurantsResponse[];
    const result = raw.map((restaurant) => {
        return new Restaurant(
            restaurant.id,
            restaurant.title,
            restaurant.opening,
            restaurant.contact,
            restaurant.infos,
            restaurant.zone,
            restaurant.latitude,
            restaurant.longitude,
            restaurant.thumbnailUrl,
            restaurant.shortDesc
        );
    });

    return result ? result : [];
}

export const MenuRestaurantsGet = async (id: number, date?: string): Promise<RestaurantMenu[]> => {
    const response = await UPHFFetcher(RESTAURANT_MENU(id, date), {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    
    const raw =  (await response.json()) as RestaurantMenuResponse[];
    const result = raw.map((menu) => {
        return new RestaurantMenu(menu.id, menu.date, menu.meal);
    });

    return result ? result : [];
}