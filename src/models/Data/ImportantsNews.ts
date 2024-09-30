export interface ImportantsNewsResponse {
  color: string;
  id: number;
  image: string;
  link: string;
  sort: number;
  statisticName: string;
  status: string;
  translations: Array<ImportantNewsTranslation>;
  authorization: Authorization | null;
}
[];

interface ImportantNewsTranslation {
  buttonLabel: string;
  content: string;
  id: number;
  important_news_id: number;
  languages_code: string;
  title: string;
}

interface Authorization {
  id: number;
  roles: Array<string>;
  type: string;
}
