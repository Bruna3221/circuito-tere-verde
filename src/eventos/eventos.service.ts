import { Injectable } from '@nestjs/common';
import { CreateEventoDto } from './dto/create-evento.dto';
import { UpdateEventoDto } from './dto/update-evento.dto';

@Injectable()
export class EventosService {
  private eventos: any[] = [];

  create(createEventoDto: CreateEventoDto) {
    console.log(createEventoDto);

    const evento = {
      id: Date.now(),
      ...createEventoDto,
    };

    this.eventos.push(evento);

    return evento;
  }

  findAll() {
    return this.eventos;
  }

  findOne(id: number) {
    return this.eventos.find(
      (evento) => evento.id === id,
    );
  }

  update(id: number, updateEventoDto: UpdateEventoDto) {
    return {
      id,
      ...updateEventoDto,
    };
  }

  remove(id: number) {
    return `Evento ${id} removido`;
  }
}