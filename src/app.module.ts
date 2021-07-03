import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GameModule } from './game/game.module';
import { GroupModule } from './group/group.module';

@Module({
  imports: [GroupModule, GameModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
