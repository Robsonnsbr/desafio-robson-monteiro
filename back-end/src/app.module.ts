import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ResultadosModule } from './resultados/resultados.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://root:root@repositorygithub.nghxluq.mongodb.net/repositoryGitHub?retryWrites=true&w=majority'
    ),
    ResultadosModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
