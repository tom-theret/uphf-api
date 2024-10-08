export interface MapPointsResponse {
  category: string;
  title: Array<Title>;
  description: Array<Description>;
  latitude: number;
  longitude: number;
  icon: Icon;
}
[];

interface Title {
  value: string;
  langcode: string;
}

interface Description {
  value: string;
  langcode: string;
}

interface Icon {
  svg: string;
  width: number;
  height: number;
  x: number;
  y: number;
}

export interface MapCampusResponse {
  id: number;
  sort: number;
  name: string;
  initial: {
    lat: number;
    lng: number;
  };
  southwest: {
    lat: number;
    lng: number;
  };
  northeast: {
    lat: number;
    lng: number;
  };
  photo: string;
}
[];

export interface MapCategoriesResponse {
  id: string;
  sort: number;
  label: Array<Label>;
}[];

interface Label {
  value: string;
  langcode: string;
}
