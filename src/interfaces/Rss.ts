export interface RssResponse {
  enclosure: Enclosure;
  pubDate: string;
  title: string;
  content: string;
  link: string;
}

interface Enclosure {
  url: string;
  type: string;
}
