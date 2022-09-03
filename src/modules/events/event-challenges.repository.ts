import { EntityRepository, Repository } from "typeorm";
import { EventChallengesEntity } from "./event-challenges.entity";

@EntityRepository(EventChallengesEntity)
export class EventChallengesRepository extends Repository<EventChallengesEntity> {}