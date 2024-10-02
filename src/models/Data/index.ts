import type { ActualitiesResponse } from "./Actualities";
import type { ContactsBody, ContactsResponse } from "./Contacts";
import type { FeaturesResponse } from "./Features";
import type { ImportantsNewsResponse } from "./ImportantsNews";
import type {
  MapCampusResponse,
  MapCategoriesResponse,
  MapPointsResponse,
} from "./Map";
import type {
  RestaurantsResponse,
  RestaurantMenuResponse,
} from "./Restaurants";
import type { ScheduleBody, ScheduleResponse } from "./Schedules";
import type { UsefulInformationsResponse } from "./Useful";
import type { ZimbraResponse } from "./Zimbra";
export class Actualities implements ActualitiesResponse {
  public enclosure: {
    url: string;
    type: string;
  };
  public pubDate: string;
  public title: string;
  public content: string;
  public link: string;

  constructor(data: ActualitiesResponse) {
    this.enclosure = {
      url: data.enclosure.url,
      type: data.enclosure.type,
    };
    this.pubDate = data.pubDate;
    this.title = data.title;
    this.content = data.content;
    this.link = data.link;
  }
}

export class Contacts implements ContactsResponse {
  public name: string;
  public firstname: string;
  public phoneNumbers: string[];
  public mailAddresses: string[];
  public assignments: string[];

  constructor(data: ContactsResponse) {
    this.name = data.name;
    this.firstname = data.firstname;
    this.phoneNumbers = data.phoneNumbers;
    this.mailAddresses = data.mailAddresses;
    this.assignments = data.assignments;
  }
}

export class Features implements FeaturesResponse {
  public id: string;
  public link: string;
  public menu: string;
  public position: unknown;
  public routerLink: unknown;
  public ssoService: string;
  public statisticName: string;
  public status: string;
  public type: string;
  public settings_by_role: any[];
  public translations: {
    content: unknown;
    features_id: number;
    id: number;
    languages_code: string;
    searchKeywords: string[];
    shortTitle: unknown;
    title: string;
  }[];
  public authorization: {
    id: number;
    roles: string[];
    type: string;
  } | null;

  constructor(data: FeaturesResponse) {
    this.id = data.id;
    this.link = data.link;
    this.menu = data.menu;
    this.position = data.position;
    this.routerLink = data.routerLink;
    this.ssoService = data.ssoService;
    this.statisticName = data.statisticName;
    this.status = data.status;
    this.type = data.type;
    this.settings_by_role = data.settings_by_role;
    this.translations = data.translations.map((translation) => ({
      content: translation.content,
      features_id: translation.features_id,
      id: translation.id,
      languages_code: translation.languages_code,
      searchKeywords: translation.searchKeywords,
      shortTitle: translation.shortTitle,
      title: translation.title,
    }));
    this.authorization = data.authorization?.id
      ? {
        id: data.authorization.id,
        roles: data.authorization.roles,
        type: data.authorization.type,
      }
      : null;
  }
}

export class ImportantsNews implements ImportantsNewsResponse {
  public color: string;
  public id: number;
  public image: string;
  public link: string;
  public sort: number;
  public statisticName: string;
  public status: string;
  public translations: {
    buttonLabel: string;
    content: string;
    id: number;
    important_news_id: number;
    languages_code: string;
    title: string;
  }[];
  public authorization: {
    id: number;
    roles: string[];
    type: string;
  } | null;

  constructor(data: ImportantsNewsResponse) {
    this.color = data.color;
    this.id = data.id;
    this.image = data.image;
    this.link = data.link;
    this.sort = data.sort;
    this.statisticName = data.statisticName;
    this.status = data.status;
    this.translations = data.translations.map((translation) => ({
      buttonLabel: translation.buttonLabel,
      content: translation.content,
      id: translation.id,
      important_news_id: translation.important_news_id,
      languages_code: translation.languages_code,
      title: translation.title,
    }));
    this.authorization = data.authorization?.id
      ? {
        id: data.authorization.id,
        roles: data.authorization.roles,
        type: data.authorization.type,
      }
      : null;
  }
}

export class MapCampus implements MapCampusResponse {
  public id: number;
  public sort: number;
  public name: string;
  public initial: {
    lat: number;
    lng: number;
  };
  public southwest: {
    lat: number;
    lng: number;
  };
  public northeast: {
    lat: number;
    lng: number;
  };
  public photo: string;

  constructor(data: MapCampusResponse) {
    this.id = data.id;
    this.sort = data.sort; // Assign the value of data.sort to this.sort
    this.name = data.name;
    this.initial = {
      lat: data.initial.lat,
      lng: data.initial.lng,
    };
    this.southwest = {
      lat: data.southwest.lat,
      lng: data.southwest.lng,
    };
    this.northeast = {
      lat: data.northeast.lat,
      lng: data.northeast.lng,
    };
    this.photo = data.photo;
  }
}

export class MapPoints implements MapPointsResponse {
  public category: string;
  public title: {
    value: string;
    langcode: string;
  }[];
  public description: {
    value: string;
    langcode: string;
  }[];
  public latitude: number;
  public longitude: number;
  public icon: {
    svg: string;
    width: number;
    height: number;
    x: number;
    y: number;
  };

  constructor(data: MapPointsResponse) {
    this.category = data.category;
    this.title = data.title.map((title) => ({
      value: title.value,
      langcode: title.langcode,
    }));
    this.description = data.description.map((description) => ({
      value: description.value,
      langcode: description.langcode,
    }));
    this.latitude = data.latitude;
    this.longitude = data.longitude;
    this.icon = {
      svg: data.icon.svg,
      width: data.icon.width,
      height: data.icon.height,
      x: data.icon.x,
      y: data.icon.y,
    };
  }
}

export class MapCategories implements MapCategoriesResponse {
  public id: string;
  public sort: number;
  public label: {
    value: string;
    langcode: string;
  }[];

  constructor(data: MapCategoriesResponse) {
    this.id = data.id;
    this.sort = data.sort;
    this.label = data.label.map((label) => ({
      value: label.value,
      langcode: label.langcode,
    }));
  }
}

export class Restaurants implements RestaurantsResponse {
  public id: number;
  public title: string;
  public opening: {
    label: string;
    isOpen: boolean;
  };
  public contact: string;
  public infos: string;
  public zone: string;
  public latitude: number;
  public longitude: number;
  public thumbnailUrl: string;
  public shortDesc: string;

  constructor(data: RestaurantsResponse) {
    this.id = data.id;
    this.title = data.title;
    this.opening = {
      label: data.opening.label,
      isOpen: data.opening.isOpen,
    };
    this.contact = data.contact;
    this.infos = data.infos;
    this.zone = data.zone;
    this.latitude = data.latitude;
    this.longitude = data.longitude;
    this.thumbnailUrl = data.thumbnailUrl;
    this.shortDesc = data.shortDesc;
  }
}

export class RestaurantMenu implements RestaurantMenuResponse {
  public id: number;
  public date: string;
  public meal: {
    name: string;
    foodcategory: {
      name: string;
      dishes: string[];
    }[];
  }[];

  constructor(data: RestaurantMenuResponse) {
    this.id = data.id;
    this.date = data.date;
    this.meal = data.meal.map((meal) => ({
      name: meal.name,
      foodcategory: meal.foodcategory.map((foodcategory) => ({
        name: foodcategory.name,
        dishes: foodcategory.dishes,
      })),
    }));
  }
}

export class Schedule implements ScheduleResponse {
  public messages: {
    level: string;
    text: string;
  }[];
  public plannings: {
    id: string;
    label: string;
    type: string;
    messages: {
      level: string;
      text: string;
    }[];
    events: {
      id: string;
      startDateTime: string;
      endDateTime: string;
      course: {
        id: string;
        label: string;
        color: string;
        type: string;
        online: boolean;
        url: unknown;
      };
      rooms: {
        id: string;
        label: string;
        type: unknown;
      }[];
      teachers: {
        id: string;
        displayname: string;
        email: string;
      }[];
      groups: {
        id: string;
        label: string;
      }[];
    }[];
    default: boolean;
  }[];

  constructor(data: ScheduleResponse) {
    this.messages = data.messages.map((message) => ({
      level: message.level,
      text: message.text,
    }));
    this.plannings = data.plannings.map((planning) => ({
      id: planning.id,
      label: planning.label,
      type: planning.type,
      messages: planning.messages.map((message) => ({
        level: message.level,
        text: message.text,
      })),
      events: planning.events.map((event) => ({
        id: event.id,
        startDateTime: event.startDateTime,
        endDateTime: event.endDateTime,
        course: {
          id: event.course.id,
          label: event.course.label,
          color: event.course.color,
          type: event.course.type,
          online: event.course.online,
          url: event.course.url,
        },
        rooms: event.rooms.map((room) => ({
          id: room.id,
          label: room.label,
          type: room.type,
        })),
        teachers: event.teachers.map((teacher) => ({
          id: teacher.id,
          displayname: teacher.displayname,
          email: teacher.email,
        })),
        groups: event.groups.map((group) => ({
          id: group.id,
          label: group.label,
        })),
      })),
      default: planning.default,
    }));
  }
}

export class UsefulInformations implements UsefulInformationsResponse {
  public id: number;
  public status: string;
  public sort: number;
  public icon: string;
  public translations: {
    id: number;
    useful_information_id: number;
    languages_code: string;
    title: string;
    description: string;
  }[];
  public phone: string;
  public email: string;

  constructor(data: UsefulInformationsResponse) {
    this.id = data.id;
    this.status = data.status;
    this.sort = data.sort;
    this.icon = data.icon;
    this.translations = data.translations.map((translation) => ({
      id: translation.id,
      useful_information_id: translation.useful_information_id,
      languages_code: translation.languages_code,
      title: translation.title,
      description: translation.description,
    }));
    this.phone = data.phone;
    this.email = data.email;
  }
}

export class Zimbra implements ZimbraResponse {
  public unreadMails: number;
  public events: {
    label: string;
    startDateTime: string;
    endDateTime: string;
    location: string;
  }[];

  constructor(data: ZimbraResponse) {
    this.unreadMails = data.unreadMails;
    this.events = data.events.map((event) => ({
      label: event.label,
      startDateTime: event.startDateTime,
      endDateTime: event.endDateTime,
      location: event.location,
    }));
  }
}

export type { ActualitiesResponse, ContactsBody, ContactsResponse, FeaturesResponse, ImportantsNewsResponse, MapCampusResponse, MapCategoriesResponse, MapPointsResponse, RestaurantsResponse, RestaurantMenuResponse, ScheduleBody, ScheduleResponse, UsefulInformationsResponse, ZimbraResponse };