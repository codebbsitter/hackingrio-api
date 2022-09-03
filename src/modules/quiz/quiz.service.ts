import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { QuizAlternativeQuestionModel } from "./questions.model";
import { QuizEntity } from "./quiz.entity";
import { QuizRepository } from "./quiz.repository";

@Injectable()
export class QuizService {
    
    constructor(
      @InjectRepository(QuizRepository)
      private readonly quizRepository: QuizRepository
    ){}

    public async findById(id: string): Promise<QuizEntity> {
      const quiz = await this.quizRepository.findById(id)
      if (!quiz) throw new NotFoundException('Quiz not found')
      return quiz
    }

    /**
     * @param id quiz id
     * @returns quiz without isCorrect value on alternative
     */
    public async getQuizById(id: string): Promise<QuizEntity> {
      const quiz = await this.findById(id)

      quiz.questions = quiz.questions.map((question) => {
        question.alternatives = question.alternatives.map((alternative) => {
          return {
            id: alternative.id,
            title: alternative.title
          }
        }) as QuizAlternativeQuestionModel[]
        return question
      })
      
      return quiz
    }

}