export interface QuizQuestionModel {
  title: string,
  alternatives: QuizAlternativeQuestionModel[]
}

export interface QuizAlternativeQuestionModel {
  id: number
  title: string,
  isCorrect: boolean
}