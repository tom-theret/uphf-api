export class Actuality {
  enclosure: {
    url: string;
    type: string;
  };
  pubDate: string;
  title: string;
  content: string;
  link: string;

  constructor(
    enclosure: { url: string; type: string },
    pubDate: string,
    title: string,
    content: string,
    link: string
  ) {
    this.enclosure = enclosure;
    this.pubDate = new Date(pubDate).toISOString();
    this.title = title;
    this.content = content;
    this.link = link;
  }
}
