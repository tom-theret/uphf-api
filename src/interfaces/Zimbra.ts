export interface ZimbraBody {
  authToken: string;
}

export interface ZimbraResponse {
  unreadMails: number;
  events: Event[];
}

interface Event {
  label: string;
  startDateTime: string;
  endDateTime: string;
  location: string;
}
