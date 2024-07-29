// src/services/projects.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Project } from '../entities/projects.entity';
import { CreateProjectDto } from 'src/dto/project.dto';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
  ) {}



  // Crear un nuevo proyecto
  async create(createProjectDto: CreateProjectDto): Promise<Project> {
    const project = this.projectRepository.create(createProjectDto);
    return await this.projectRepository.save(project);
  }

  // Obtener todos los proyectos
  async findAll(): Promise<Project[]> {
    return this.projectRepository.find();
  }

  // Obtener un proyecto por ID
  async findOne(id: number): Promise<Project> {
    return this.projectRepository.findOne({ id });
  }

  // Actualizar un proyecto
  async update(id: number, updateProjectDto: Partial<Project>): Promise<Project> {
    await this.projectRepository.update(id, updateProjectDto);
    return this.findOne(id);
  }

  // Eliminar un proyecto
  async remove(id: number): Promise<void> {
    await this.projectRepository.delete(id);
  }
}
