import { HttpException, Injectable } from '@nestjs/common';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';

@Injectable()
export class GameService {
  private games = [];

  create(createGameDto: CreateGameDto) {
    const { groupId } = createGameDto;

    if (groupId == null) return new HttpException('missing group id', 400);

    this.games.push({
      groupId,
      id: this.games.length,
    });

    return 'This action adds a new game';
  }

  findAll() {
    return this.games;
  }

  findOne(id: number) {
    return this.games.find((game) => game.id === id) || 'not found';
  }

  update(id: number, updateGameDto: UpdateGameDto) {
    return `This action updates a #${id} game`;
  }

  remove(id: number) {
    return `This action removes a #${id} game`;
  }
}
