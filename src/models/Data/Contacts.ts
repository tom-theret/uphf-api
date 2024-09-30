export interface ContactsBody {
  type: "STAFF" | string;
  value: string;
  authToken: string;
}

export interface ContactsResponse {
  name: string;
  firstname: string;
  phoneNumbers: Array<string>;
  mailAddresses: Array<string>;
  assignments: Array<string>;
}
