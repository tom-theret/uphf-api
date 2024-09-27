export class Contact {
  constructor(
    public name: string,
    public firstname: string,
    public phoneNumbers: string[],
    public mailAddresses: string[],
    public assignments: string[]
  ) {}
}
