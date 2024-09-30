export interface RestaurantsResponse {
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
[];

interface Opening {
  label: string;
  isOpen: boolean;
}

export interface RestaurantMenuResponse {
  id: number;
  date: string;
  meal: Array<Meal>;
}

interface Meal {
  name: string;
  foodcategory: Array<Foodcategory>;
}

interface Foodcategory {
  name: string;
  dishes: Array<string>;
}
