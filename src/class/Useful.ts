export class Useful {
  constructor(
    public id: number,
    public status: string,
    public sort: number,
    public icon: string,
    public translations: Translation[],
    public blocks: Block[]
  ) {}
}

interface Translation {
  id: number;
  useful_information_section_id: number;
  languages_code: string;
  title: string;
}

interface Block {
  id: number;
  status: string;
  sort: number;
  phone: string;
  email: string;
  icon: string;
  section: number;
  translations: BlockTranslation[];
}

interface BlockTranslation {
  id: number;
  useful_information_id: number;
  languages_code: string;
  title: string;
  description: string;
}
