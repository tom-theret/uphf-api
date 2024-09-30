export interface ZimbraResponse {
  unreadMails: number;
  events: Array<Event>;
}

interface Event {
  label: string;
  startDateTime: string;
  endDateTime: string;
  location: string;
}
