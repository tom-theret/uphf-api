export interface SSOBody {
  service: string;
  authToken: string;
}

export interface SSOResponse {
  service: string;
  ticket: string;
}

export class SSO implements SSOResponse {
  constructor(public service: string, public ticket: string) {
    this.service = service;
    this.ticket = ticket;
  }
}