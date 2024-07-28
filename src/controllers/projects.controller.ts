// src/controllers/projects.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ProjectsService } from '../services/projects.service';
import { Project } from '../entities/projects.entity';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Post()
  async create(@Body() createProjectDto: Partial<Project>): Promise<Project> {
    return this.projectsService.create(createProjectDto);
  }

  @Get()
  async findAll(): Promise<Project[]> {
    return this.projectsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Project> {
    return this.projectsService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateProjectDto: Partial<Project>,
  ): Promise<Project> {
    return this.projectsService.update(id, updateProjectDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.projectsService.remove(id);
  }
}
