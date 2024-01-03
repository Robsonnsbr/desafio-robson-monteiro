import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getAPI(): string {
    return 'Servidor de dados em execução!';
  }
}
