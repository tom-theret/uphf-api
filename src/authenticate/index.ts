import UPHF from "../client/UPHF";
import { AuthBody, AuthFlowData, AuthResult } from "../interfaces/Auth";
import { AUTH_WITH_CREDENTIALS, AUTH_WITH_REFRESH_TOKEN, KEEP_AUTH_WITH_CREDENTIALS } from "../utils/endpoints";
import { UPHFFetcher } from "../utils/fetcher";

export const authWithCredentials = async (credentials: AuthBody): Promise<UPHF> => {
    const response = await UPHFFetcher(KEEP_AUTH_WITH_CREDENTIALS(), {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(credentials)
    });
    
    const raw = await response.json() as AuthResult;

    return new UPHF(raw.authToken, 
        raw.refreshAuthToken,
        {
        birthDate: raw.birthDate,
        displayName: raw.displayName,
        email: raw.email,
        firstname: raw.firstname,
        ine: raw.ine,
        name: raw.name,
        roles: raw.roles,
        uid: raw.uid,
        staffNumbers: raw.staffNumbers,
        studentNumber: raw.studentNumber,
    } as AuthResult);
};

export const authWithRefreshToken = async (credentials: AuthBody): Promise<UPHF> => {
    const response = await UPHFFetcher(AUTH_WITH_REFRESH_TOKEN(), {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${credentials.refreshAuthToken}`
        },
    });
    
    const raw = await response.json() as AuthResult;

    return new UPHF(raw.authToken, 
        credentials.refreshAuthToken || "",
        {
        birthDate: raw.birthDate,
        displayName: raw.displayName,
        email: raw.email,
        firstname: raw.firstname,
        ine: raw.ine,
        name: raw.name,
        roles: raw.roles,
        uid: raw.uid,
        staffNumbers: raw.staffNumbers,
        studentNumber: raw.studentNumber,
    } as AuthResult);
}