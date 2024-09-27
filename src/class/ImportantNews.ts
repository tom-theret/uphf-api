export class ImportantNews {
  constructor(
    public color: string,
    public id: number,
    public image: string,
    public link: string,
    public sort: number,
    public statisticName: string,
    public status: string,
    public translations: ImportantNewsTranslation[],
    public authorization: Authorization
  ) {}
}

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
  roles: string[];
  type: string;
}
