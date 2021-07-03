class Rule {}

type ID = number;

enum RoundType {
  SONG_SUBMISSION,
  SONG_EVALUATION,
}

class Round {
  id: ID;

  type: RoundType;

  shouldStartAt: Date;
  shouldEndAt: Date;

  startedAt: Date;
  endedAt: Date;
}

export class Game {
  id: ID;

  group: ID;

  rules: Rule[];
  player: ID[];

  createdAt: Date;

  rounds: ID[];
}
