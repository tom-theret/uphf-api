export interface ContactsBody {
    type: "STAFF" | string;
    value: string;
    authToken: string;
}

export interface ContactsResponse {
    [contact: number]: {
        name: string;
        firstname: string;
        phoneNumbers: string[];
        mailAddresses: string[];
        assignments: string[];
    }
}