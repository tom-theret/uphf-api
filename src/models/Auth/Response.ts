export interface AuthResponse {
  authToken: string;
  displayName: string;
  firstname: string;
  name: string;
  email: string;
  ine: string;
  studentNumber: number;
  staffNumbers: Array<number>; // Not sure if this is the correct type.
  birthDate: string;
  uid: string;
  roles: Array<string>;
  refreshAuthToken: string | ""; // If use refresh token, the API response return a "" string.
}
