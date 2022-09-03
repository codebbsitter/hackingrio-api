import { EntityRepository, MoreThan, Repository } from "typeorm";
import { EventChallengesEntity } from "./event-challenges.entity";
import { EventsEntity } from "./events.entity";

@EntityRepository(EventChallengesEntity)
export class EventChallengesRepository extends Repository<EventChallengesEntity> {
  public async getEventChallengesByEventId(id: string): Promise<EventChallengesEntity[]> {
    const challenges = await this.find({
      where: { eventId: id }
    })
    return challenges
  }
}