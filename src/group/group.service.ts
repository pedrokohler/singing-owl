import { Injectable } from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { Group } from './entities/group.entity';
import { HttpException } from '@nestjs/common';

@Injectable()
export class GroupService {
  private groups: Group[] = [];
  private ids = 0;

  create(createGroupDto: CreateGroupDto) {
    const group = new Group();
    const { name } = createGroupDto;

    group.id = ++this.ids;
    group.name = name;
    group.ongoingGame = null;
    group.users = [];
    group.games = [];
    group.rules = [];

    throw new HttpException('Se fodeu', 404);

    return this.groups.push(group);
  }

  findAll() {
    return this.groups;
  }

  findOne(id: number) {
    return this.groups.find((group) => group.id === id) || 'not found';
  }

  update(id: number, updateGroupDto: UpdateGroupDto) {
    return `This action updates a #${id} group`;
  }

  remove(id: number) {
    return `This action removes a #${id} group`;
  }
}
