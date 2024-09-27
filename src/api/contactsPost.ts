import { Contact } from "../class/Contact";
import { ContactsBody, ContactsResponse } from "../interfaces/Contacts";
import { CONTACTS } from "../utils/endpoints";
import { UPHFFetcher } from "../utils/fetcher";

export const contactsPost = async (
  type: string,
  value: string,
  authToken: string
): Promise<Contact[]> => {
  const response = await UPHFFetcher(CONTACTS(), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      type: type,
      value: value,
      authToken: authToken,
    } as ContactsBody),
  });
  const raw = (await response.json()) as ContactsResponse[];
  const result = raw?.map((item) => {
    return new Contact(
      item.name,
      item.firstname,
      item.phoneNumbers,
      item.mailAddresses,
      item.assignments
    );
  });

  return result? result : [];
};
