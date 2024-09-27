export interface ScheduleBody {
  authToken: string;
  startDate: string;
  endDate: string;
  asUser: unknown;
}

export interface ScheduleResponse {
  messages: Message[];
  plannings: Planning[];
}

interface Message {
  level: string;
  text: string;
}

interface Planning {
  id: string;
  label: string;
  type: string;
  messages: Message[];
  events: Event[];
  default: boolean;
}

interface Event {
  id: string;
  startDateTime: string;
  endDateTime: string;
  course: Course;
  rooms: Room[];
  teachers: Teacher[];
  groups: Group[];
}

interface Course {
  id: string;
  label: string;
  color: string;
  type: string;
  online: boolean;
  url: unknown;
}

interface Room {
  id: string;
  label: string;
  type: unknown;
}

interface Teacher {
  id: string;
  displayname: string;
  email: string;
}

interface Group {
  id: string;
  label: string;
}
