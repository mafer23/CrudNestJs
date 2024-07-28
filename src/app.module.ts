// src/app.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectsController } from './controllers/projects.controller';
import { UsersController } from './controllers/users.controller';
import { DatabaseModule } from './database/database.module';
import { ProjectsModule } from './module/projects/projects.module';
import config from './config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
    DatabaseModule,
    ProjectsModule,
  ],
  controllers: [AppController, ProjectsController, UsersController],
  providers: [AppService],
})
export class AppModule {}
