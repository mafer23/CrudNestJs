// src/controllers/projects.controller.ts
import { Controller, UploadedFile ,Get, Post, Body, Param, Put, Delete, UseInterceptors } from '@nestjs/common';
import { ProjectsService } from '../services/projects.service';
import { Project } from '../entities/projects.entity';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { CreateProjectDto } from 'src/dto/project.dto';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const filename = `${file.originalname}_${Date.now()}.pdf`;
          cb(null, filename);
        },
      }),
    }),
  )
  @Post()
  async uploadFileAndCreateProject(
    @UploadedFile() file: Express.Multer.File,
    @Body() createProjectDto: CreateProjectDto,
  ): Promise<Project> {
    // Agregar el nombre del archivo al DTO del proyecto
    createProjectDto.file = file.filename;

   // Llamar al método de creación con el DTO actualizado
   return this.create(createProjectDto);
  }



 
  @Post()
  async create(@Body() createProjectDto: CreateProjectDto): Promise<Project> {
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
