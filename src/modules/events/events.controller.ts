import { Body, Controller, Get, Post, UseGuards, Request, Param } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { EventChallengesEntity } from './event-challenges.entity';
import { EventsEntity } from './events.entity';
import { EventsService } from './events.service';

@Controller('events')
@ApiTags('events')
export class EventsController {

  constructor(
    private eventsService: EventsService
  ) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  public async getAllActiveEvents(): Promise<EventsEntity[]> {
    const events = await this.eventsService.getAllActiveEvents()
    return events
  }

  @Get('/challenges/:id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  public async getEventChallenges(
    @Param('id') id: string
  ): Promise<EventChallengesEntity[]> {
    const challenges = await this.eventsService.getEventChallengesByEventId(id)
    return challenges
  }

}