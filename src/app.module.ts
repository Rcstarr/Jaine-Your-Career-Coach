import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppHealthController } from './appHealth.controller';
import { CareerCoachModule } from './modules/career-coach/career-coach.module';
import { VideoAnalysisModule } from './modules/video-analysis/video-analysis.module';
import { MatchmakingModule } from './modules/matchmaking/matchmaking.module';
import { ConversationStarterModule } from './modules/conversation-starter/conversation-starter.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    CareerCoachModule,
    VideoAnalysisModule,
    MatchmakingModule,
    ConversationStarterModule,
  ],
  controllers: [AppHealthController],
})
export class AppModule {}
