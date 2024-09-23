export interface AuthBody {
    username: string;
    password: string;
    refreshToken?: string;
}

export interface AuthResult {
    authToken: string;
    displayName: string;
    firstname: string;
    name: string;
    email: string;
    ine: string;
    studentNumber: number;
    staffNumbers: unknown[];
    birthDate: string;
    uid: string;
    roles: string[];
    refreshAuthToken?: string;
}

export interface AuthFlowData {
    refreshToken: string | null;
    username: string;
    password: string;
}