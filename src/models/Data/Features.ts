export interface FeaturesResponse {
  id: string;
  link: string;
  menu: string;
  position: unknown;
  routerLink: unknown;
  ssoService: string;
  statisticName: string;
  status: string;
  type: string;
  settings_by_role: Array<unknown>;
  translations: Array<Translation>;
  authorization: Authorization | null;
}
[];

interface Translation {
  content: unknown;
  features_id: number;
  id: number;
  languages_code: string;
  searchKeywords: Array<string>;
  shortTitle: unknown;
  title: string;
}

interface Authorization {
  id: number;
  roles: Array<string>;
  type: string;
}
