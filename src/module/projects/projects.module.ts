import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProjectsController } from '../../controllers/projects.controller';
import { ProjectsService } from './../../services/projects.service';
import { Project } from '../../entities/projects.entity';

@Module({
  imports:[ TypeOrmModule.forFeature([Project]) ],
  controllers:[ProjectsController],
  providers:[ProjectsService],
  exports:[ProjectsService],
})
export class ProjectsModule {

}
