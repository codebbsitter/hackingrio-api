import { Body, Controller, Get, Post, UseGuards, Request, Param } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { QuizEntity } from './quiz.entity';
import { QuizService } from './quiz.service';

@Controller('quiz')
@ApiTags('quiz')
export class QuizController {

  constructor(
    private quizService: QuizService
  ) {}

  @Get('/:id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  public async getQuiz(
    @Param('id') id: string
  ): Promise<QuizEntity> {
    const quiz = await this.quizService.getQuizById(id)
    return quiz
  }
}
