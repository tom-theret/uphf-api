export class MapPoint {
  constructor(
    public category: string,
    public title: Title[],
    public description: Description[],
    public latitude: number,
    public longitude: number,
    public icon: Icon
  ) {}
}

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

export class MapCampus {
  constructor(
    public id: number,
    public sort: number,
    public name: string,
    public initial: {
      lat: number;
      lng: number;
    },
    public southwest: {
      lat: number;
      lng: number;
    },
    public northeast: {
      lat: number;
      lng: number;
    },
    public photo: string
  ) {}
}

export class MapCategories {
  constructor(public id: string, public sort: number, public label: Label[]) {}
}

interface Label {
  value: string;
  langcode: string;
}
