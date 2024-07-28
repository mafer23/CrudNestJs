import { IsString, IsNotEmpty, IsOptional, IsNumber, IsPositive } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProjectDto {
 

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'The title of the project', example: 'Project Title' })
  title: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'The description of the project', example: 'Project Description' })
  description: string;

  @IsNotEmpty()
  @ApiProperty({ type: 'string', format: 'binary', description: 'The file associated with the project' })
  file: any; // Hacer el archivo obligatorio
}
