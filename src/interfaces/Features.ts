export interface FeaturesBody {
  authToken: string;
}

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
  settings_by_role: any[];
  translations: Translation[];
  authorization: Authorization;
}

interface Translation {
  content: unknown;
  features_id: number;
  id: number;
  languages_code: string;
  searchKeywords: string[];
  shortTitle: unknown;
  title: string;
}

interface Authorization {
  id: number;
  roles: string[];
  type: string;
}
