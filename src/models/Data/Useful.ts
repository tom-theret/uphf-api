export interface UsefulInformationsResponse {
  id: number;
  status: string;
  sort: number;
  icon: string;
  translations: Array<Translation>;
  phone: string;
  email: string;
}


interface Translation {
  id: number;
  useful_information_id: number;
  languages_code: string;
  title: string;
  description: string;
}
