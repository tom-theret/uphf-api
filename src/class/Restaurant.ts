export class Restaurant {
  constructor(
    public id: number,
    public title: string,
    public opening: {
      label: string;
      isOpen: boolean;
    },
    public contact: string,
    public infos: string,
    public zone: string,
    public latitude: number,
    public longitude: number,
    public thumbnailUrl: string,
    public shortDesc: string
  ) {}
}

export class RestaurantMenu {
  constructor(public id: number, public date: string, public meal: Meal[]) {}
}

interface Meal {
  name: string;
  foodcategory: Foodcategory[];
}

interface Foodcategory {
  name: string;
  dishes: string[];
}
