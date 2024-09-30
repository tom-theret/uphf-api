import { authWithRefreshToken } from "./Auth";
import type { AuthResponse, SSOBody, SSOResponse } from "./models/Auth";
import { SSO } from "./models/Auth/Sso";
import { Actualities, Contacts, Features, ImportantsNews, MapCampus, MapCategories, MapPoints, RestaurantMenu, Restaurants, Schedule, UsefulInformations, Zimbra } from "./models/Data";
import type { ActualitiesResponse } from "./models/Data/Actualities";
import type { ContactsBody, ContactsResponse } from "./models/Data/Contacts";
import type { FeaturesResponse } from "./models/Data/Features";
import type { ImportantsNewsResponse } from "./models/Data/ImportantsNews";
import type { MapCampusResponse, MapCategoriesResponse, MapPointsResponse } from "./models/Data/Map";
import type { RestaurantMenuResponse, RestaurantsResponse } from "./models/Data/Restaurants";
import type { ScheduleBody, ScheduleResponse } from "./models/Data/Schedules";
import type { UsefulInformationsResponse } from "./models/Data/Useful";
import type { ZimbraResponse } from "./models/Data/Zimbra";
import { CONTACTS, FEATURES, IMPORATANT_NEWS, KEEP_AUTH_WITH_REFRESH_TOKEN, MAIL_CALENDAR, MAP, MAP_CAMPUS, MAP_CATEGORIES, RESTAURANT_MENU, RESTAURANTS, RSS, SCHEDULE, SSO_SERVICE_TOKEN, USEFUL_INFORMATION } from "./utils/Endpoints-1";
import { UPHFFetcher } from "./utils/Fetcher-1";

export * from "./Auth";

export class UPHF {
  private tokenExpires: number;
  public constructor(public userData: AuthResponse) {
    this.userData = userData;
    this.tokenExpires = Date.now() + 1000 * 60 * 5;
  }

  /** Check if the token is expired.
   * @returns True if the token is expired, false otherwise.
   */
  private isTokenExpired() {
    return Date.now() >= this.tokenExpires;
  }

  /** Refresh the token if it is expired.
   * @returns The new user data.
   */
  private async refreshToken(): Promise<boolean> {
    await authWithRefreshToken({
      refreshAuthToken: this.userData.refreshAuthToken,
    }).then((data) => {
      this.userData.authToken = data.userData.authToken;
      this.tokenExpires = Date.now() + 1000 * 60 * 5; // 5 minutes
    });

    return true;
  }

  /** Get the list of actualities.
   * Can be called without authentication.
   * @returns The list of actualities.
   */
  public static async getActualities(): Promise<Actualities[]> {
    const response = await UPHFFetcher(RSS(), {
      method: "GET",
    });
    const raw = (await response.json()) as ActualitiesResponse[];
    const result = raw?.map((actuality) => new Actualities(actuality));
    return result ?? [];
  }

  /** Get the list of contacts.
   * @param options The options to pass to the fetcher.
   * @returns The list of contacts.
   */
  public async getContacts(options: ContactsBody): Promise<Contacts[]> {
    if (this.isTokenExpired()) {
      await this.refreshToken();
    }
    const response = await UPHFFetcher(CONTACTS(), {
      method: "POST",
      body: JSON.stringify({type: options.type, value: options.value, authToken: this.userData.authToken} as ContactsBody),
    });
    const raw = (await response.json()) as ContactsResponse[];
    const result = raw?.map((contact) => new Contacts(contact));
    return result ?? [];
  }

  /** Get the list of features available for the user.
   * @returns The list of features.
   */
  public async getFeatures(): Promise<Features[]> {
    if (this.isTokenExpired()) {
      await this.refreshToken();
    }
    const response = await UPHFFetcher(FEATURES(), {
      method: "POST",
      body: JSON.stringify({authToken: this.userData.authToken}),
    });
    const raw = (await response.json()) as FeaturesResponse[];
    const result = raw?.map((feature) => new Features(feature));
    return result ?? [];
  }

  /** Get the list of important news.
   * @returns The list of important news.
   */
  public async getImportantNews(): Promise<ImportantsNews[]> {
    if (this.isTokenExpired()) {
      await this.refreshToken();
    }
    const response = await UPHFFetcher(IMPORATANT_NEWS(), {
      method: "POST",
      body: JSON.stringify({authToken: this.userData.authToken}),
    });
    const raw = (await response.json()) as ImportantsNewsResponse[];
    const result = raw?.map((ImportantNews) => new ImportantsNews(ImportantNews));
    return result ?? [];
  }

  /** Get the list of campus.
   * Can be called without authentication.
   * @returns The list of campus.
   */
  public static async getMapCampus(): Promise<MapCampus[]> {
    const response = await UPHFFetcher(MAP_CAMPUS(), {
      method: "GET",
    });
    const raw = (await response.json()) as MapCampusResponse[];
    const result = raw?.map((mapCampus) => new MapCampus(mapCampus));
    return result ?? [];
  }

  /** Get the list of map categories.
   * Can be called without authentication.
   * @returns The list of map categories.
   */
  public static async getMapCategories(): Promise<MapCategories[]> {
    const response = await UPHFFetcher(MAP_CATEGORIES(), {
      method: "GET",
    });
    const raw = (await response.json()) as MapCategoriesResponse[];
    const result = raw?.map((mapCategory) => new MapCategories(mapCategory));
    return result ?? [];
  }

  /** Get the list of points on the map.
   * Can be called without authentication.
   * @returns The list of points.
  */
  public static async getMapPoints(): Promise<MapPoints[]> {
    const response = await UPHFFetcher(MAP(), {
      method: "GET",
    });
    const raw = (await response.json()) as MapPointsResponse[];
    const result = raw?.map((mapPoint) => new MapPoints(mapPoint));
    return result ?? [];
  }
  
  /** Get the menu of a restaurant.
   * Can be called without authentication.
   * @param id The ID of the restaurant.
   * @param date The date of the menu. If not provided, the current week's menu will be returned.
   * @returns The menu of the restaurant.
   */
  public static async getMenuFromRestaurant(id: number, date?: string): Promise<RestaurantMenu[]> {
    const response = await UPHFFetcher(RESTAURANT_MENU(id, date), {
      method: "GET",
    });
    const raw = (await response.json()) as RestaurantMenuResponse[];
    const result = raw?.map((restaurantMenu) => new RestaurantMenu(restaurantMenu));
    return result ?? [];
  }

  /** Get the list of restaurants present on campus.
   * Can be called without authentication.
   * @returns The list of restaurants.
   */
  public static async getRestaurants(): Promise<Restaurants[]> {
    const response = await UPHFFetcher(RESTAURANTS(), {
      method: "GET",
    });
    const raw = (await response.json()) as RestaurantsResponse[];
    const result = raw?.map((restaurant) => new Restaurants(restaurant));
    return result ?? [];
  }

  /** Get the schedule of the user.
   * @param startDate The start date of the schedule.
   * @param endDate The end date of the schedule.
   * @param asUser The user to get the schedule of. If not provided, the schedule of the current user will be returned.
   * @returns The schedule of the user or user provided.
   */
  public async getSchedule(options: ScheduleBody): Promise<Schedule> {
    if (this.isTokenExpired()) {
      await this.refreshToken
    }
    const response = await UPHFFetcher(SCHEDULE(), {
      method: "POST",
      body: JSON.stringify({authToken: this.userData.authToken, startDate: options.startDate, endDate: options.endDate, asUser: options.asUser} as ScheduleBody),
    });
    const raw = (await response.json()) as ScheduleResponse;
    const result = new Schedule(raw);
    return result;
  }

  /** Get the list of useful informations.
   * Can be called without authentication.
   * @returns The list of useful informations.
   */
  public static async getUsefulInformations(): Promise<UsefulInformations[]> {
    const response = await UPHFFetcher(USEFUL_INFORMATION(), {
      method: "GET",
    });
    const raw = (await response.json()) as UsefulInformationsResponse[];
    const result = raw?.map((usefulInformation) => new UsefulInformations(usefulInformation));
    return result ?? [];
  }

  /** Get Zimbra informations. (Events, count of unread mails)
   * @returns The Zimbra calendar.
   */
  public async getZimbra(): Promise<Zimbra> {
    if (this.isTokenExpired()) {
      await this.refreshToken();
    }
    const response = await UPHFFetcher(MAIL_CALENDAR(), {
      method: "POST",
      body: JSON.stringify({authToken: this.userData.authToken}),
    });
    const raw = (await response.json()) as ZimbraResponse;
    const result = new Zimbra(raw);
    return result;
  }

  /** Get a SSO ticket for a service.
   * @param service The URL of the login page of the service.
   * @returns The URL + ticket to login to the service.
   */
  public async getSsoTicket(service: string): Promise<SSO> {
    if (this.isTokenExpired()) {
      await this.refreshToken();
    }
    const response = await UPHFFetcher(SSO_SERVICE_TOKEN(), {
      method: "POST",
      body: JSON.stringify({authToken: this.userData.authToken, service: service} as SSOBody),
    });
    const raw = (await response.text()) as string;
    const result = new SSO(service, raw);
    return result as SSOResponse;
  }
}
