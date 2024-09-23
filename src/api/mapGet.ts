import { MapCampusResponse, MapCategoriesResponse, MapPointsResponse } from "../interfaces/Map";
import { MAP, MAP_CAMPUS, MAP_CATEGORIES } from "../utils/endpoints";
import { UPHFFetcher } from "../utils/fetcher";

export const mapPointsGet = async (): Promise<MapPointsResponse> => {
    const response = await UPHFFetcher(MAP(), {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    return await response.json() as MapPointsResponse;
}

export const mapCampusGet = async (): Promise<MapCampusResponse> => {
    const response = await UPHFFetcher(MAP_CAMPUS(), {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    return await response.json() as MapCampusResponse;
}

export const mapCategoriesGet = async (): Promise<MapCategoriesResponse> => {
    const response = await UPHFFetcher(MAP_CATEGORIES(), {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    return await response.json() as MapCategoriesResponse;
}