import { contactsPost } from "../api/contactsPost";
import { featuresPost } from "../api/featuresPost";
import { importantNewsPost } from "../api/importantNewsPost";
import { mapCampusGet, mapCategoriesGet, mapPointsGet } from "../api/mapGet";
import { MenuRestaurantsGet, RestaurantsGet } from "../api/restaurantsGet";
import { rssGet } from "../api/rssGet";
import { schedulePost } from "../api/schedulePost";
import { ssoPost } from "../api/ssoPost";
import { usefulGet } from "../api/usefulGet";
import { zimbraPost } from "../api/zimbraPost";
import { authWithCredentials, authWithRefreshToken } from "../authenticate";
import { AuthFlowData, AuthResult } from "../interfaces/Auth";

export default class UPHF {
    private tokenExpires: number;
    constructor(public authToken: string, private loginData: AuthFlowData) {
        this.authToken = authToken;
        this.tokenExpires = Date.now() + 5 * 60 * 1000;
    }

    /** This method is used to refresh the token if it's expired
     * (5 minutes)
     *  @param refreshAuthToken
     *  @returns  - true - if the token is refreshed
     */
    private async refreshToken(): Promise<boolean> {
        await authWithRefreshToken({
            refreshAuthToken: this.loginData.refreshAuthToken,
        }).then((data)=> {
            this.authToken = data.authToken;
            this.tokenExpires = Date.now() + 55 * 60 * 1000;
        });
        return true;
    }

    /** This method is used to get deferents points in the map
     *  @returns Points available in the map api
     */
    public async getMapPoints(){
        return await mapPointsGet();
    }

    /** This method is used to get deferents campus in the map api
     *  and used as shortcut in the app
     *  @returns Campus available in the map api
     */
    public async getMapCampus(){
        return await mapCampusGet();
    }

    /** This method is used to get deferents categories in the map api
     *  @returns Categories available in the map api
     */
    public async getMapCategories(){
        return await mapCategoriesGet();
    }

    /** This method is used to get the actualities from the university
     *  @returns Actualities from the university
     */
    public async getActualities(){
        return await rssGet();
    }

    /** This method is used to get the restaurants (Crous du Nord) from the university
     *  @returns Restaurants from the university
     */
    public async getRestaurants(){
        return await RestaurantsGet();
    }

    /** This method is used to get the menu from a specific restaurant
     *  @param id The id of the restaurant
     *  @param date The date of the menu
     *  @returns Menu from the restaurant
     */
    public async getMenuFromRestaurant(id: number, date?: string){
        return await MenuRestaurantsGet(id, date);
    }

    /** This method is used to get the useful links from the university
     *  @returns Useful links from the university
     */
    public async getUsefull(){
        return await usefulGet();
    }

    /** This method is used to get the number of unreaded mails and the calendar from the university
     *  @returns Mail and calendar from the university
     */
    public async getMailCalendar(){
        if(Date.now() > this.tokenExpires){
            await this.refreshToken();
        }
        return await zimbraPost(this.authToken);
    }

    /** This method is used to get the contacts from the university
     *  @param type The type of the contact
     *  @param value The value of the contact
     *  @returns Contacts array from the university
     */
    public async getContacts(type: string, value: string){
        if(Date.now() > this.tokenExpires){
            await this.refreshToken();
        }
        return await contactsPost(type, value, this.authToken);
    }

    /** This method is used to get the important news from the university
     *  @returns Important news from the university
     */
    public async getImportantNews(){
        if(Date.now() > this.tokenExpires){
            await this.refreshToken();
        }
        return await importantNewsPost(this.authToken);
    }

    /** This method is used to get the features associated with account from the university
     *  @returns Features from the university
     */
    public async getFeatures(){
        if(Date.now() > this.tokenExpires){
            await this.refreshToken();
        }
        return await featuresPost(this.authToken);
    }

    /** This method is used to get the schedules associated with account from the university
     *  @param startDate The start date of the schedule
     *  @param endDate The end date of the schedule
     *  @returns Schedules from the university
     */
    public async getSchedules(startDate: string, endDate: string){
        if(Date.now() > this.tokenExpires){
            await this.refreshToken();
        }
        return await schedulePost(this.authToken, startDate, endDate);
    }

    /** This method is used to login to a service with the SSO
     * @param service The service to login
     * @returns The response of the service
     */
    public async ssoLogin(service: string){
        if(Date.now() > this.tokenExpires){
            await this.refreshToken();
        }
        return await ssoPost(service, this.authToken);
    }
}