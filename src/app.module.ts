import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule } from './students/students.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    StudentsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'pass123',
      autoLoadEntities: true, // models will load automatically
      synchronize: true, // entities will be synched with the db
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
