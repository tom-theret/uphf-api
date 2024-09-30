/* GENERL ENDPOINTS */
export const APPMOB_BASE = () => "https://appmob.uphf.fr/backend";

/* Authentification */
export const AUTH_WITH_CREDENTIALS = () => `${APPMOB_BASE()}/auth`; // Only here for documentation. PLEASE USE KEEP_AUTH_WITH_CREDENTIALS
export const KEEP_AUTH_WITH_CREDENTIALS = () => `${APPMOB_BASE()}/keep-auth/auth`;
export const KEEP_AUTH_WITH_REFRESH_TOKEN = () => `${APPMOB_BASE()}/keep-auth/reauth`;

/* Communication & Calendars */
export const MAIL_CALENDAR = () => `${APPMOB_BASE()}/mail-calendar`;
export const SCHEDULE = () => `${APPMOB_BASE()}/schedule`;

/* Contacts */
export const CONTACTS = () => `${APPMOB_BASE()}/contacts`;
export const USEFUL_INFORMATION = () => `${APPMOB_BASE()}/useful-information`;

/*Features */
export const FEATURES = () => `${APPMOB_BASE()}/features`;

/* Map */
export const MAP = () => `${APPMOB_BASE()}/map`;
export const MAP_CATEGORIES = () => `${APPMOB_BASE()}/map/categories`;
export const MAP_CAMPUS = () => `${APPMOB_BASE()}/map/campus`;

/* Notifications */
export const NOTIFICATIONS = () => `${APPMOB_BASE()}/notifications`;
export const NOTIFICATIONS_CHANNELS = () => `${APPMOB_BASE()}/notifications/channels`;
export const NOTIFICATIONS_CHANNELS_UNSUBSCRIBED = () => `${APPMOB_BASE()}/notifications/unsubscribed-channels`;
export const NOTIFICATIONS_READ = () => `${APPMOB_BASE()}/notifications/read`;
export const REGISTER_NOTIFICATIONS = () => `${APPMOB_BASE()}/notifications/register`;
export const UNREGISTER_NOTIFICATIONS = () => `${APPMOB_BASE()}/notifications/unregister`;

/* News */
export const IMPORATANT_NEWS = () => `${APPMOB_BASE()}/important-news`;
export const RSS = () => `${APPMOB_BASE()}/rss`;

/* Restaurant */
export const RESTAURANTS = () => `${APPMOB_BASE()}/restaurants`;
export const RESTAURANT_MENU = (id: number, date?: unknown) => `${APPMOB_BASE()}/restaurant/menus?id=${id}&date=${date? date : ""}`;

/* SSO */
export const SSO_SERVICE_TOKEN = () => `${APPMOB_BASE()}/sso-service-token`;
