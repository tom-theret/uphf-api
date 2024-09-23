export interface MapPointsResponse {
    [point: number]: {
        category: string;
        title: Title[];
        description: Description[];
        latitude: number;
        longitude: number;
        icon: Icon;
    }
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

export interface MapCampusResponse {
    [campus: number]: {
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
}

export interface MapCategoriesResponse {
    [category: number]: {
        id: string;
        sort: number;
        label: Label[];
    }
}

interface Label {
    value: string;
    langcode: string;
}

