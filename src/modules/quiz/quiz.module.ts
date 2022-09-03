import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { QuizController } from "./quiz.controller";
import { QuizRepository } from "./repositories/quiz.repository";
import { QuizService } from "./quiz.service";
import { UsersModule } from "../users/users.module";
import { QuizAnswersRepository } from "./repositories/quiz-answers.repositories";

@Module({
	imports: [
		TypeOrmModule.forFeature([
			QuizRepository,
			QuizAnswersRepository,
		]),
		UsersModule
	],
	controllers: [QuizController],
	providers: [QuizService],
	exports: [QuizService]
})
export class QuizModule {}