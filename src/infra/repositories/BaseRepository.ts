import { AxiosHttpClient } from '../http/axiosHttpClient';
import { Repository } from '../entities/Repository';

export abstract class BaseRepository<T> implements Repository<T> {
  protected readonly httpClient: AxiosHttpClient;

  constructor() {
    this.httpClient = new AxiosHttpClient();
  }

  abstract save(entity: T): Promise<void>;

  abstract get(url: string): Promise<T>;
}