export class Zimbra {
    constructor(
        public unreadMails: number,
        public events: Event[]
    ) {}
}

interface Event {
    label: string;
    startDateTime: string;
    endDateTime: string;
    location: string;
}