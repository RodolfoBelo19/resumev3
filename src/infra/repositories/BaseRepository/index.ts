import { AxiosHttpClient } from '../../../infra/http/axiosHttpClient';
import { IRepository } from './IRepository';

export abstract class BaseRepository<T> implements IRepository<T> {
  protected readonly httpClient: AxiosHttpClient;

  constructor() {
    this.httpClient = new AxiosHttpClient();
  }

  abstract save(entity: T): Promise<void>;
}