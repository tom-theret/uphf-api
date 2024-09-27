export class Feature {
  constructor(
    public id: string,
    public link: string,
    public menu: string,
    public position: unknown,
    public routerLink: unknown,
    public ssoService: string,
    public statisticName: string,
    public status: string,
    public translations: Translation[],
    public authorization: Authorization
  ) {}
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
