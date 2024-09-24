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

    return new UPHF(raw.authToken, {
        refreshAuthToken: raw.refreshAuthToken,
    } as AuthFlowData);
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

    return new UPHF(raw.authToken, {
        refreshAuthToken: credentials.refreshAuthToken,
    } as AuthFlowData);
}