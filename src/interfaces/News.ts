export interface ImportantNewsBody {
    authToken: string;
}

export interface ImportantNewsResponse {
    [id: number]: {
        color: string;
        id: number;
        image: string;
        link: string;
        sort: number;
        statisticName: string;
        status: string;
        translations: ImportantNewsTranslation[];
        authorization: Authorization;
    }
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