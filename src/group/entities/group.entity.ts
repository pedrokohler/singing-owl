class Rule {}
type ID = number;

export class Group {
  id: ID;
  name: string;
  ongoingGame: ID;
  users: ID[];
  games: ID[];
  rules: Rule[];
}
