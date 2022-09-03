import { EntityRepository, MoreThan, Repository } from 'typeorm';
import { EventsEntity } from './events.entity';

@EntityRepository(EventsEntity)
export class EventsRepository extends Repository<EventsEntity> {
  public async findAllActiveEvents(): Promise<EventsEntity[]> {
    const events = this.find({
      where: {
        isActive: true,
        finished_at: MoreThan(new Date()),
      },
    });
    return events;
  }
}
