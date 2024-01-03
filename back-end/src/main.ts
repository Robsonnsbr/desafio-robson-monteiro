import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

const PORT = 4000;

// Devido à arquitetura atual do desafio, o método PATCH não está em uso.
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const corsOptions: CorsOptions = {
    origin: ['http://localhost:3000'],
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    credentials: true
  };

  app.enableCors(corsOptions);

  await app.listen(PORT);

  console.log(
    `\n\nServidor(API) em execução na porta: ${4000} Acesse: [http://localhost:${PORT}] Enjoy!\n\n`
  );
}
bootstrap();
