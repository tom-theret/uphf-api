import { ContactsBody, ContactsResponse } from "../interfaces/Contacts";
import { CONTACTS } from "../utils/endpoints";
import { UPHFFetcher } from "../utils/fetcher";

export const contactsPost = async (type: string, value: string, authToken: string): Promise<ContactsResponse> => {
    const response = await UPHFFetcher(CONTACTS(), {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            type: type,
            value: value,
            authToken: authToken
        } as ContactsBody)
    });
    return await response.json() as ContactsResponse;
}