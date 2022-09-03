import { ForbiddenException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { EventsEntity } from "./events.entity";
import { EventsRepository } from "./events.repository";

@Injectable()
export class EventsService {
    
  constructor(
    @InjectRepository(EventsRepository)
    private readonly eventsRepository: EventsRepository,
  ){}

  public async getAllActiveEvents(): Promise<EventsEntity[]> {
    const events = await this.eventsRepository.findAllActiveEvents()
    if(!events) throw new NotFoundException('There is not active events')
    return events
  }

}