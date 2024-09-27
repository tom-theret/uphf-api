import { MapCampus, MapCategories, MapPoint } from "../class/Map";
import { MapCampusResponse, MapCategoriesResponse, MapPointsResponse } from "../interfaces/Map";
import { MAP, MAP_CAMPUS, MAP_CATEGORIES } from "../utils/endpoints";
import { UPHFFetcher } from "../utils/fetcher";

export const mapPointsGet = async (): Promise<MapPoint[]> => {
    const response = await UPHFFetcher(MAP(), {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });

    const raw = (await response.json()) as MapPointsResponse[];
    const result = raw?.map((point) => {
        return new MapPoint(
            point.category,
            point.title,
            point.description,
            point.latitude,
            point.longitude,
            point.icon
        );
    });

    return result ? result : [];
}

export const mapCampusGet = async (): Promise<MapCampus[]> => {
    const response = await UPHFFetcher(MAP_CAMPUS(), {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });

    const raw = (await response.json()) as MapCampusResponse[];
    const result = raw?.map((campus) => {
        return new MapCampus(
            campus.id,
            campus.sort,
            campus.name,
            campus.initial,
            campus.southwest,
            campus.northeast,
            campus.photo
        );
    });

    return result ? result : [];
}

export const mapCategoriesGet = async (): Promise<MapCategories[]> => {
    const response = await UPHFFetcher(MAP_CATEGORIES(), {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    
    const raw = await response.json() as MapCategoriesResponse[];
    const result = raw?.map((category) => {
        return new MapCategories(
            category.id,
            category.sort,
            category.label
        );
    });

    return result ? result : [];
}