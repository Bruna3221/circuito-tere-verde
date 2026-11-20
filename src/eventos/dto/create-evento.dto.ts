import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateEventoDto {
  @ApiProperty({
    example: 'Festival de Trilhas',
  })
  @IsString()
  @IsNotEmpty()
  titulo: string;

  @ApiProperty({
    example: 'Evento de Ecoturismo',
  })
  @IsString()
  @IsNotEmpty()
  descricao: string;

  @ApiProperty({
    example: 'Teresópolis',
  })
  @IsString()
  @IsNotEmpty()
  local: string;

  @ApiProperty({
    example: '2026-12-15',
  })
  @IsString()
  @IsNotEmpty()
  data: string;


  @ApiProperty({
  example: 'Trilha',
})
@IsString()
@IsNotEmpty()
categoria: string;

}
