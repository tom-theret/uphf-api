import { RestaurantMenuResponse, RestaurantsResponse } from "../interfaces/Restaurants";
import { RESTAURANT_MENU, RESTAURANTS } from "../utils/endpoints";
import { UPHFFetcher } from "../utils/fetcher";

export const RestaurantsGet = async (): Promise<RestaurantsResponse> => {
    const response = await UPHFFetcher(RESTAURANTS(), {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    return await response.json() as RestaurantsResponse;
}

export const MenuRestaurantsGet = async (id: number, date?: string): Promise<RestaurantMenuResponse> => {
    const response = await UPHFFetcher(RESTAURANT_MENU(id, date), {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    return await response.json() as RestaurantMenuResponse;
}