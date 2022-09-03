import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { typeormConfig } from './configs/typeorm.config'
import { AuthModule } from './modules/auth/auth.module'
import { UsersModule } from './modules/users/users.module'

@Module({
  imports: [
    TypeOrmModule.forRoot(typeormConfig()),
    UsersModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
